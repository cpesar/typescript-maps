// import { User } from './User';
// import { Company } from './Company';


// Instructions to every other class on how they can be an argument to 'addMarker'
interface Mappable {
  location: {
    lat: number;
    lng: number;
  }
}


export class CustomMap{
  private googleMap: google.maps.Map;

  constructor(divId: string){
    this.googleMap = new google.maps.Map(document.getElementById(divId),{
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }
  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });
  }

}


  //------------------ This is bad code: 2 methods that are almost identical (except for user and company)------------------
  // addUserMarker(user: User): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: user.location.lat,
  //       lng: user.location.lng
  //     }
  //   });
  // }

  // addCompanyMarker(company: Company): void{
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng
  //     }
  //   });
  // }
//-----------------------------------------------------------------------
//--------- This is also bad code-----------------------------------------
  // addMarker(mappable: User | Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: mappable.location.lat,
  //       lng: mappable.location.lng
  //     }
  //   });
  // }
//-------------------------------------------------------------------------------
   
