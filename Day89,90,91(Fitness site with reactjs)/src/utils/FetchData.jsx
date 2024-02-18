export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "382531fe40msh0706e2402476160p11a080jsnb50b086ad1dd",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const optionForYoutube = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "382531fe40msh0706e2402476160p11a080jsnb50b086ad1dd",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const FetchData = async (url, option) => {
  try {
    const response = await fetch(url, option);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
