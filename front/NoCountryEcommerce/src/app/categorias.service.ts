import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

    hogar: boolean = true
    protesisDentales: boolean = true
    cosplay: boolean = true

    setHogar(value: boolean): void {
        this.hogar = value;
      }
  
    getHogar(): boolean {
        return this.hogar;
    }

    setProtesisDentales(value: boolean): void {
        this.protesisDentales = value;
    }

    getProtesisDentales(): boolean {
        return this.protesisDentales;
    }

    setCosplay(value: boolean): void {
        this.cosplay = value;
    }

    getCosplay(): boolean {
        return this.cosplay;
    }
}
