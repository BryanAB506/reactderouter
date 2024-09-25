async function postUsers(data) {
  try {
   
      // const userData = { 
      //     nombre,
      //     Email,
      //     Contraseña      
      // };

      const response = await fetch("http://localhost:3001/users", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      });

   
      return await response.json();

      
  } catch (error) {
      console.error('Error posting user:', error);
      throw error;
  }
}

export default postUsers


