import { Component, OnInit } from '@angular/core';
import { DataModel } from './data.model';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import {FilterPipe} from './filter.pipe';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchForm: FormGroup;
  homeData: DataModel[] = [];
  searchName: FilterPipe;
  searchID: FilterPipe;
  orderBy: FilterPipe;
  isLoading= false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      name: ['', Validators.required],
      score : ['', Validators.required]
    });
    this.getHomeData();

  }
  get f() {
    return this.searchForm.controls;
  }
  clearForm(){

  }



  getHomeData() {
    this.isLoading= true;
    this.http.get<DataModel[]>('/api').subscribe(responseData => {
      this.homeData = responseData;
      console.log(this.homeData);
      this.isLoading= false;
    });
  }

}
