import Swal from "sweetalert2";




const getStoredData = () => {
    const storedData = localStorage.getItem('Car')
    if (storedData) {
        return JSON.parse(storedData)
    }
    return [];
}

const setStoredData = (id) => {
    const getLsData = getStoredData()

    const isExist = getLsData.find(storedData => storedData == id)

    if (!isExist) {
        getLsData.push(id);
        localStorage.setItem('Car', JSON.stringify(getLsData))
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'SuccessFully Added To Cart',
        });

    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Failed',
            text: 'Oh! You Have Already Added to Cart',
        });
    }


}

export { getStoredData, setStoredData }