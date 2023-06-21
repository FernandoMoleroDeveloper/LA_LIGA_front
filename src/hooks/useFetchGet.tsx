import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../App";

const useFetch = (apiUrl: string): any => {
  const authInfo = useContext(AuthContext);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (apiUrl && authInfo?.userToken) {
      fetch(apiUrl, {
        headers: {
          Authorization: `Bearer ${authInfo?.userToken}`,
        },
      })
        .then(async (response) => {
          if (response.status !== 200) {
            alert("Ha ocurrido un error en la petición");
          }
          return await response.json();
        })
        .then((responseParsed) => {
          setResult(responseParsed);
        })
        .catch((error) => {
          alert("Ha ocurrido un error en la petición");
          console.error(error);
        });
    } else {
      alert("No se ha recibido el token o la URL.");
    }
  }, [apiUrl]);

  return [result];
};

export default useFetch;
