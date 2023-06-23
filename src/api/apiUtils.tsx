import { useContext, useState } from "react";
import { AuthContext } from "../App";
import { UserResponse } from "../models/User";

const authInfo = useContext(AuthContext);
const API_URL_PROFILE = `${process.env.REACT_APP_API_URL as string}/user/myuser`;

const getCurrentUserTeamPlayers = (): any => {
  const [playersOnMyTeam, setPlayersOnMyTeam] = useState<UserResponse[]>([]);

  fetch(API_URL_PROFILE, {
    headers: {
      Authorization: `Bearer ${authInfo?.userToken as string}`,
    },
  })
    .then(async (response) => {
      if (response.status !== 200) {
        alert("Ha ocurrido un error en la petición al servidor.");
      }
      return await response.json();
    })
    .then((responseParsed) => {
      setPlayersOnMyTeam(responseParsed.playersOnMyTeam);
    })
    .catch((error) => {
      alert("Ha ocurrido un error en la petición en el codigo.");
      console.error(error);
    });

  return playersOnMyTeam;
};

export { getCurrentUserTeamPlayers };
