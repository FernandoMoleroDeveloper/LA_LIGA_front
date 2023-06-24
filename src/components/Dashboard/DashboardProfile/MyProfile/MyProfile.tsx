import "./MyProfile.scss";
import { FullUser } from "../../../../models/User";
import { useState, useRef, useEffect, useContext } from "react";
import { AuthContext } from "../../../../App";

const MyProfile = ({ user }: FullUser): JSX.Element => {
  const authInfo = useContext(AuthContext);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [fullName, setFullName] = useState(user?.firstName + " " + user?.lastName);
  const inputRef = useRef<HTMLInputElement>(null);
  const API_URL_USER = `${process.env.REACT_APP_API_URL as string}/user/${user._id}`;

  const editProfile = (): void => {
    setToggleEdit(!toggleEdit);
  };

  const handleKeyPress = async (event: React.KeyboardEvent<HTMLInputElement>): Promise<void> => {
    if (event.key === "Enter") {
      const [name, lastName1, lastName2] = fullName.split(" ");
      if (name === undefined || lastName1 === undefined) {
        alert("Se debe especificar al menos un nombre y un apellido");
      } else {
        lastName2 ? setFullName(name + " " + lastName1 + " " + lastName2) : setFullName(name + " " + lastName1);
        setToggleEdit(!toggleEdit);
        await updateProfile();
        if (inputRef.current) {
          inputRef.current.blur(); // Quitar el enfoque del input
        }
      }
    }
  };

  const updateProfile = async (): Promise<void> => {
    const [name, lastName1, lastName2] = fullName.split(" ");
    const newName = name;
    const newLastName = lastName2 ? lastName1 + " " + lastName2 : lastName1;

    const userToUpdate: any = { firstName: newName, lastName: newLastName, team: user?.team, rol: authInfo.userRol };
    console.log("El nuevo nombre:")
    console.log(newName);
    console.log("Los nuevos apellidos:")
    console.log(newLastName);

    fetch(API_URL_USER, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authInfo?.userToken as string}`,
      },
      body: JSON.stringify(userToUpdate),
    })
      .then(async (response) => {
        if (response.status !== 200) {
          alert("Ha ocurrido un error en la respuesta al actualizar el usuario.");
        }
        return await response.json();
      })
      .catch((error) => {
        alert("Ha ocurrido un error en el codigo al actualizar el usuario.");
        console.error(error);
      });
  };

  useEffect(() => {
    if (toggleEdit && inputRef.current) {
      inputRef.current.focus();
    }
  }, [toggleEdit]);

  return (
    <>
      <p className="dashboard__profile"></p>
      <img className="dashboard__profile-picture" src={user?.image} alt="user-image" />
      <p>
        <input
          className={toggleEdit ? "dashboard__profile-fullName-edit" : "dashboard__profile-fullName"}
          defaultValue={fullName}
          onChange={(event) => {
            setFullName(event.target.value);
          }}
          onKeyDown={handleKeyPress}
          readOnly={!toggleEdit}
          ref={inputRef}
        />
      </p>
      <p className="dashboard__profile-role">{user?.rol}</p>
      <button className="dashboard__profile-edit" onClick={editProfile}>
        Editar perfil
      </button>
    </>
  );
};

export default MyProfile;
