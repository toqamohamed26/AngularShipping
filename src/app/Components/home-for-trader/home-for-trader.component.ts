import { Component, OnInit } from '@angular/core';
import { GetAllOrderService } from 'src/app/Service/get-all-order.service';

@Component({
  selector: 'app-home-for-trader',
  templateUrl: './home-for-trader.component.html',
  styleUrls: ['./home-for-trader.component.css']
})
export class HomeForTraderComponent implements OnInit{
  orders : number[] =[]
  status : string [] =[
    'جديد',
    'قيد الانتظار',
    'تم التسليم للمندوب',
    'تم التسليم',
    'لا يمكن الوصول',
    'تم التأجيل',
    'تم التسليم حزيئا',
    'تم الإلغاء قبل التسليم',
    'تم الرفض مع الدفع',
    'رفض مع سداد جزء',
    'رفض ولم يتم الدفع'
  ]
  constructor
  (private orderServise:GetAllOrderService)
   {}
    ngOnInit(): void
    {
      // this.orderServise.TraderCount(id).subscribe(e=>{
      //   this.orders = e ; 
      // })
    }
  
  
  }
  