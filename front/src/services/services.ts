import IapiRequest from "@/Interface/IapiRequest";


export const apiRequest:IapiRequest = {

    fetchAdress: 'http://localhost:5000/api/items/',
    fetchAdressImg: 'http://localhost:5000/',
    loadingData:false,
    getAllItems: async function(){
                    this.loadingData = true;
                    const response = await fetch(this.fetchAdress);
                    const data = await response.json();
                    this.loadingData = false;
                    return data
                },
    getAloneItem: async function(id){
                    const response = await fetch(this.fetchAdress + id);
                    const data = await response.json();
                    return data
    }, 
    getImg: async function(id){
        const response = await fetch(this.getImg + id);
                    const data = response;
                    return data
    }    
}

