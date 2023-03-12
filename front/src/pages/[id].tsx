import OneItemFull from "@/components/ViewTeaItems/OneItemFull";
import { apiRequest } from "@/services/services";

export const getStaticPaths = async () =>{
    const data = await apiRequest.getAllItems();
    const paths = data.map(({id})=>({
        params: {id: id.toString()},
    }))
    return{
        paths,
        fallback: false,
    }
}

export const getStaticProps = async(context:any) =>{
    
    const {id} = context.params;
    const data = await apiRequest.getAloneItem(id)
    if(!data){
        return{
            notFound: true
        }
    }

    return{
       props:{item: data}, 
    }

}

const item = ({item}) =>{
    return(
        
           <OneItemFull item ={item}/>
       
    )
}
export default item;