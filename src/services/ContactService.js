import axios from 'axios';

export class ContactService {
    static serverURL = `http://localhost:9000`;

    static getGroups() {
        let dataURL = `${this.serverURL}/groups`
        return axios.get(dataURL)
    }

    static getSingleGroup(contact) {
        let groupId = contact.groupId
        let dataURL = `${this.serverURL}/groups/${groupId}`
        return axios.get(dataURL)
    }
    
    static getAllContacts(){
        let dataURL = `${this.serverURL}/contacts`
        return axios.get(dataURL)
    }

    static getSingleDataContact(userId){
        let dataURL = `${this.serverURL}/contacts/${userId}`
        return axios.get(dataURL)
    }


}