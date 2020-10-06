import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrintserviceService {
  baseUrl = environment.baseUrl;
  oldBaseUrl= environment.oldBaseUrl;
  constructor(private http:HttpClient) 
  {

    
   }

   /**
    * Get List of Printing Methods
    */
   public fetchPrintMethod() {
     
     return this.http.get(`${this.baseUrl}/const/type/1900`);
   }

   /**
    * Update Printing Method of a Printer
    */
   public updatePrintMethod(data:any):Observable<any> {

    return this.http.post(`${this.baseUrl}/printer/printmethod
    `,data)
     
   }

   /**
    *Get Mail Server Info
    */
   public fetchMailServernfo() {
     
    return this.http.get(`${this.baseUrl}/system/setting/mailServer`)
   }

   /**
    * Get List of Printers
    */
   public fetchAllPrinter():Observable<any> {
     
    return this.http.get(`${this.baseUrl}/printer/index/dtable`)
   }

   /**
    * Get List of Printing Jobs with Cost Info
    */
   public fetchListPrintingJobwithCostInfo(data:any):Observable<any> {
     
    return this.http.post(`${this.baseUrl}/log/out/data`,data)
   }

   public fetchJobByPin(pinnumber){

    return this.http.get(`${this.oldBaseUrl}/v1/jobs/pin/${pinnumber}`)
   }

    /**
    * Get List of Printing Jobs with Cost Info with Pin
    */
   public fetchListPrintingJobwithCostInfoWithPin(data:any):Observable<any> {
     
    return this.http.get(`${this.oldBaseUrl}/kioskapi/v1/jobs/pin/${data}`)
   }

   //http://localhost:8097/kioskapi/v1/printers
   /**
    * Delete Printing Job
    */
   public deletePrintingJob(data:any):Observable<any> {
     return this.http.post(`${this.baseUrl}/log/delete`,data)
   }

   /**
    * fetchScanImage
    */
   public fetchScanImage() {
     return this.http.get(`${this.oldBaseUrl}/kioskapi/images/list/scan`)
   }

   /**
    * fetchFaxImage
    */
   public fetchFaxImage() {
     return this.http.get(`${this.oldBaseUrl}/kioskapi/images/list/fax`)
   }

   
   /**
    * fetchCopyImage
    */
   public fetchCopyImage() {
    return this.http.get(`${this.oldBaseUrl}/kioskapi/images/list/copy`)
  }

  //  /**
  //   * fetchCopyImage
  //   */
  //  public fetchCopyImage() {
  //   return this.http.get(`${this.oldBaseUrl}/kioskapi/images/list/copy`)
  // }

  /**
   * fetchTargetPrinter
   */
  public fetchTargetPrinter() {
    
    return this.http.get(`${this.oldBaseUrl}/kioskapi/v1/printers`);
  }
  
}
