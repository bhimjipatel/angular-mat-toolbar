import { Component, OnInit, NgZone } from "@angular/core";
import { ScrollDispatcher, CdkScrollable } from "@angular/cdk/scrolling";
/**
 * @title Basic toolbar
 */
@Component({
  selector: "toolbar-overview-example",
  templateUrl: "toolbar-overview-example.html",
  styleUrls: ["toolbar-overview-example.css"]
})
export class ToolbarOverviewExample implements OnInit {
  isOnTop = true;
  
  constructor(
    private scrollDispatcher: ScrollDispatcher,
    private zone: NgZone
  ) {}

  ngOnInit(): void {
    this.scrollDispatcher.scrolled().subscribe((event: CdkScrollable) => {
      const scroll = event.measureScrollOffset("top");
      let newIsOnTop = this.isOnTop;

      if (scroll > 0) {
        newIsOnTop = false
      } else {
        newIsOnTop = true;
      }

      if (newIsOnTop !== this.isOnTop) {
        this.zone.run(() => {
          this.isOnTop = newIsOnTop;
        });
      }
    });
  }
}

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
