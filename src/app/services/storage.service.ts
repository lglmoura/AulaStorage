import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { 

  }
  getAll(key: string): Promise<any[]> {
    return this.storage.get(key);
  }
  public insert(key:string, item:any) {
    
    console.log(key);
    return this.save(key, item);
  }

  private save(key: string, item:any) {
    return this.storage.set(key, item);
  }
}
