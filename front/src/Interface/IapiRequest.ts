interface IapiRequest{
    fetchAdress: string;
    fetchAdressImg: string;
    loadingData: boolean;
    getAllItems: ()=>Promise<[]>;
    getAloneItem: (id:string)=>Promise<[]>;
    getImg: (id:string)=>Promise<any>;    
}
export default IapiRequest;