import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  public type?: 'success' | 'warning' = 'warning'
  public text?: string = 'Erro ao enviar E-Mail'
  public isActive = false

  constructor() { }

  public success(message: string, duration?: number) {
    this.type = 'success'
    this.text = message
    this.isActive = true
    setTimeout(() => {
      this.isActive = false
    }, duration ?? 6000)
  }

  public warning(message: string, duration?: number) {
    this.type = 'warning'
    this.text = message
    this.isActive = true
    setTimeout(() => {
      this.isActive = false
    }, duration ?? 6000)
  }

  public closeAlert() {
    this.isActive = false
  }
}
