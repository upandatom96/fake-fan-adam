import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {MarkdownModule, MarkedOptions, MarkedRenderer} from "ngx-markdown";

import {AppComponent} from "./app.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {InfoComponent} from "./components/info/info.component";
import {AppRoutingModule} from "./app-routing.module";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {FooterComponent} from "./components/footer/footer.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ActuatorReportComponent} from "./components/actuator-report/actuator-report.component";
import {LoginComponent} from "./components/login/login.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {AdminComponent} from "./components/admin/admin.component";
import {HeaderComponent} from "./components/header/header.component";
import {BodyComponent} from "./components/body/body.component";
import {LoadingComponent} from "./components/simple/loading/loading.component";
import {CardComponent} from "./components/simple/card/card.component";
import {BodyAltComponent} from "./components/body-alt/body-alt.component";
import {BookmarkDetailsComponent} from "./components/bookmark-details/bookmark-details.component";
import {BookmarkFormComponent} from "./components/bookmark-form/bookmark-form.component";
import {BookmarkOverviewComponent} from "./components/bookmark-overview/bookmark-overview.component";
import {BookmarkTableComponent} from "./components/bookmark-table/bookmark-table.component";
import {BookmarksComponent} from "./components/bookmarks/bookmarks.component";
import {StageComponent} from "./components/stage/stage.component";
import {LinkComponent} from "./components/link/link.component";
import {MonitorComponent} from "./components/monitor/monitor.component";
import {SuperlativeScavengerComponent} from "./components/superlative-scavenger/superlative-scavenger.component";
import {MuppetFormComponent} from "./components/muppet-form/muppet-form.component";
import {MuppetListingComponent} from "./components/muppet-listing/muppet-listing.component";
import {MuppetDisplayComponent} from "./components/muppet-display/muppet-display.component";
import {NumberInputComponent} from "./components/simple/form/number-input/number-input.component";
import {StringInputComponent} from "./components/simple/form/string-input/string-input.component";
import {SelectInputComponent} from "./components/select-input/select-input.component";
import {OnOffSwitchComponent} from "./components/simple/form/on-off-switch/on-off-switch.component";
import {StringListInputComponent} from "./components/simple/form/string-list-input/string-list-input.component";
import {StringListDisplayComponent} from "./components/simple/string-list-display/string-list-display.component";
import {MuppetRandomComponent} from "./components/muppet-random/muppet-random.component";
import {MuppetStatsComponent} from "./components/muppet-stats/muppet-stats.component";
import {MuppetInfoComponent} from "./components/muppet-info/muppet-info.component";
import {TunnelGoonsGeneratorComponent} from "./components/tunnel-goons-generator/tunnel-goons-generator.component";
import {TunnelGoonsGalleryComponent} from "./components/tunnel-goons-gallery/tunnel-goons-gallery.component";
import {TunnelGoonCardComponent} from "./components/tunnel-goon-card/tunnel-goon-card.component";
import {TunnelGoonDetailsComponent} from "./components/tunnel-goon-details/tunnel-goon-details.component";
import {ModalBoxBasicComponent} from "./components/simple/modal-box-basic/modal-box-basic.component";
import {ModalTriggerButtonComponent} from "./components/simple/modal-trigger-button/modal-trigger-button.component";
import {MissingWordComponent} from "./components/missing-word/missing-word.component";
import {MarkdownViewerComponent} from "./components/simple/markdown-viewer/markdown-viewer.component";
import {TwitterListComponent} from "./components/twitter-list/twitter-list.component";

// function that returns `MarkedOptions` with renderer override
export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();

  renderer.blockquote = (text: string) => {
    return "<div class=\"card mb-2 bg-grey-alt\"><div class=\"card-body py-0 px-3\"><blockquote class=\"blockquote\"><p>" + text + "</p></blockquote></div></div>";
  };

  return {
    renderer,
    gfm: true,
    breaks: false,
    pedantic: false,
    smartLists: true,
    smartypants: false,
  };
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InfoComponent,
    NavbarComponent,
    FooterComponent,
    ActuatorReportComponent,
    LoginComponent,
    ProfileComponent,
    AdminComponent,
    HeaderComponent,
    BodyComponent,
    LoadingComponent,
    CardComponent,
    BodyAltComponent,
    BookmarkDetailsComponent,
    BookmarkFormComponent,
    BookmarkOverviewComponent,
    BookmarkTableComponent,
    BookmarksComponent,
    StageComponent,
    LinkComponent,
    MonitorComponent,
    SuperlativeScavengerComponent,
    MuppetFormComponent,
    MuppetListingComponent,
    MuppetDisplayComponent,
    NumberInputComponent,
    StringInputComponent,
    SelectInputComponent,
    OnOffSwitchComponent,
    StringListInputComponent,
    StringListDisplayComponent,
    MuppetRandomComponent,
    MuppetStatsComponent,
    MuppetInfoComponent,
    TunnelGoonsGeneratorComponent,
    TunnelGoonsGalleryComponent,
    TunnelGoonCardComponent,
    TunnelGoonDetailsComponent,
    ModalBoxBasicComponent,
    ModalTriggerButtonComponent,
    MissingWordComponent,
    MarkdownViewerComponent,
    TwitterListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptionsFactory,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
