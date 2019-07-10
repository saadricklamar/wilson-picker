export const postNewProject = async (project) => {
    try{
      const url = 'http://localhost:3001/api/v1/projects';
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(project),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!response.ok) {
        throw Error('Failed to post new project');
      }
      const result = await response.json();
      return result;
    }catch (error) {
      return error;
    }
  }

  export const postNewPalette = async (palette) => {
    try{
      const url = 'http://localhost:3001/api/v1/palettes';
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(palette),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!response.ok) {
        throw Error('Failed to post new palette');
      }
      const result = await response.json();
      return result;
    }catch (error) {
      return error;
    }
  }


  export const deleteProject = async (id)=>{
    try{
        const url = `http://localhost:3001/api/v1/projects/${id}`;
        const response = await fetch(url, {
            method: 'DELETE'
        })
        if(!response.ok){
            throw Error (response.statusText)
        }
        return response;
    } catch (error) {
        return error
    }
   
}