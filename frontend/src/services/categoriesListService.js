import {get} from "./HttpService";

function baseURL() {return "http://radlings.appspot.com/" }
//function baseURL() {return "https://radlings.appspot.com/fetch_resource?category=motivation,energy,relaxation,joy" }

export function getListings(){
    return new Promise((resolve, reject) => {
        get(baseURL() + "categories", function(data) {
            resolve(data);
        }, function(textStatus) {
            reject(textStatus);
        });
    });
}

export function getListingActivities(category){
    return new Promise((resolve, reject) => {
        get(baseURL() + "fetch_resource?category=" + category, function(data) {
            if(data !== undefined || Object.keys(data).length !== 0) {
                resolve(data);
            }
            else {
                reject('Error while retrieving Listing');
            }
        }, function(textStatus) {
            reject(textStatus);
        });
    });
}