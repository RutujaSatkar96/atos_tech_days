
import{ValidScoreList} from "../zelros/validscorelist.model"
import{DocumentList} from "../zelros/documentlist.model"
export class ZelrosResponse{
    name:string;
    validsize:number;
    suggestion :string;
    isaddtional:boolean;
    valid:ValidScoreList;
    additional:DocumentList;
}