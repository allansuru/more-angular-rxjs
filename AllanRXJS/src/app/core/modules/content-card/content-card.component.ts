import { GlobalStore } from './../../store/global.state';
import { Select } from '@ngxs/store';

import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';
import { Observable } from 'rxjs';

@Component({
  selector: 'content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
  animations: [
    trigger('pageAnimations', [
      transition('* => final', [
        query('.card-main-content', style({ maxHeight: '100px' })),
        query('.card-projected-content', style({ opacity: 0 })),

        query('.card-main-content', stagger(0, [animate(400, style({ maxHeight: '2000px' }))])),
        query('.card-projected-content', stagger(0, [animate('800ms', style({ opacity: 1 }))]))
      ])
    ])
  ]
})
export class ContentCardComponent implements OnInit {
  @Input()
  title!: string;
  @Input() isShowShadow = true;
  @Input() isShowDivider = true;
  @Input()
  subtitle?: string | null;
  @Input() minHeigth = '100';
  @Input()
  loading?: boolean | null

  @Select(GlobalStore.errorSelect)
  public errorApi$?: Observable<string>;

  constructor() { }

  ngOnInit(): void {
  }

}
