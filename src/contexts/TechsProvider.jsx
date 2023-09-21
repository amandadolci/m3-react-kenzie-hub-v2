import { createContext, useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ImportsContext } from './ImportsProvider';
import { UserContext } from './UserProvider';

export const TechsContext = createContext({});

export function TechsProvider() {
	const {
		api,
		jwtDecode,
		createTechSuccessToast,
		createTechErrorToast,
		updateTechSuccessToast,
		updateTechErrorToast,
		deleteTechSuccessToast,
		deleteTechErrorToast,
	} = useContext(ImportsContext);
	const { techs } = useContext(UserContext);

	const [techList, setTechList] = useState([]);
	const [techModal, setTechModal] = useState(false);
	const [techObject, setTechObject] = useState();

	const token = localStorage.getItem('@KenzieHub:token');
	const headers = { authorization: `Bearer ${token}` };

	useEffect(() => {
		async function loadTechs() {
			try {
				const { sub } = jwtDecode(token);
				const { data } = await api.get(`users/${sub}`, { headers });
				setTechList(data.techs);
			} catch (error) {
				console.log(error.response.data.message);
			}
		}
		techs.length > 0 ? setTechList(techs) : loadTechs();
	}, []);

	async function createTech(techBody) {
		try {
			const { data } = await api.post('users/techs/', techBody, { headers });
			delete data.user;
			setTechList([...techList, data]);
			setTechModal(false);
			createTechSuccessToast();
		} catch (error) {
			createTechErrorToast(error.response.data.message);
		}
	}

	async function updateTech(techBody) {
		try {
			const techId = techObject.id;
			await api.put(`users/techs/${techId}`, techBody, { headers });
			let techIndex;
			techList.find((tech, i) => (tech.id === techId ? (techIndex = i) : null));
			const { status } = techBody;
			const updatedTech = { ...techObject, status: status };
			const updatedTechList = techList.filter(({ id }) => id !== techId);
			updatedTechList.splice(techIndex, 0, updatedTech);
			setTechList(updatedTechList);
			setTechModal(false);
			updateTechSuccessToast();
		} catch (error) {
			updateTechErrorToast(error.response.data.message);
		}
	}

	async function deleteTech(techId) {
		try {
			await api.delete(`users/techs/${techId}`, { headers });
			const updatedTechList = techList.filter(({ id }) => id !== techId);
			setTechList(updatedTechList);
			setTechModal(false);
			deleteTechSuccessToast();
		} catch (error) {
			deleteTechErrorToast(error.response.data.message);
		}
	}

	function openModal(object = null) {
		setTechModal(true);
		object ? setTechObject(object) : setTechObject(null);
	}

	const closeModal = () => setTechModal(false);

	return (
		<TechsContext.Provider
			value={{
				techList,
				createTech,
				updateTech,
				deleteTech,
				openModal,
				techObject,
				techModal,
				setTechModal,
				closeModal,
			}}>
			<Outlet />
		</TechsContext.Provider>
	);
}
