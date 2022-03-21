export const URL = "https://blog.coursify.me/wp-json/wp/v2/";

export const get = async ( label, url ) => {
  try {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const params = { 
      method: 'GET',
      headers
    };

    const urlCompleta = URL + url;
    const resp = await fetch(urlCompleta, params);

    if (resp) {
      const json = await resp.json();
      if (json && resp.status < 400) {
        return json;
      }
    }
    console.warn(`Erro ao carregar ${label}: ${resp.status}`);
    return null;
    
  } catch (e) {
    console.warn(`Erro ao carregar ${label}: ${e}`);
    return null;
  }
}
