const changePageHeading = (pageHeading) => {
    document.title = pageHeading
}


const getRequest = async () => {
    const axiosClient = await axios.get('https://jsonplaceholder.typicode.com/todos')
    console.log(axiosClient);
}