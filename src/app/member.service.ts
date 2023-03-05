import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { Member, ServerResponse } from "./models";

@Injectable()
export class MemberService {

    // CONSTRUCTOR
    constructor(private http:HttpClient) {}
    
    // METHOD to post member and receive response from server
    postMember(member:Member):Promise<ServerResponse> {
        // Create FormData
        const form = new FormData()
        form.set("name", member.name)
        form.set("telegram", member.telegram)
        form.set("grade", member.grade)
        
        return firstValueFrom(this.http.post<ServerResponse>('https://configredis-production.up.railway.app/member/add',form))
    }

    // METHOD to get member from server
    getMember(name:String):Promise<ServerResponse> {
        return firstValueFrom(this.http.get<ServerResponse>(`https://configredis-production.up.railway.app/member/${name}`))
    }
}