import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RestService } from './services/rest.service';
import { MessageService } from './services/message.service';
import { MessageComponent } from './message/message.component';
import { NgbModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VendorProductsComponent } from './vendor-products/vendor-products.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductComponent } from './productlist/product/product.component';
import { ProductdesComponent } from './productdes/productdes.component';
import { CartService } from './services/cart.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
// import { ModalModule } from '@ng-bootstrap';
import {RatingModule} from "ngx-rating";
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    MessageComponent,
    VendorProductsComponent,
    ProductlistComponent,
    ProductComponent,
    ProductdesComponent,
    CheckoutComponent,
    PaymentSuccessComponent,
    OrderlistComponent
  ],
  imports: [
    BrowserModule,
    RatingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    NgxPaginationModule,

    RouterModule.forRoot([
      {
        path: '', component: LoginComponent
      },
      {
        path: 'register', component: RegisterComponent
      },
      {
        path: 'home', component: HomeComponent,
        children: [
          { path: 'vendorproducts', component: VendorProductsComponent },
          {
            path : 'productlist',component : ProductlistComponent
          },
          {
            path : 'description/:id',component : ProductdesComponent
          },
          {
            path : 'checkout',component : CheckoutComponent
          },
          {
            path : 'payment-success',component : PaymentSuccessComponent
          },
          {
            path : 'orderlist',
            component : OrderlistComponent
          }
        ]
      }
    ])
  ],
  providers: [CartService,RestService, MessageService, {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
