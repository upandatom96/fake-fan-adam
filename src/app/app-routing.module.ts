import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {InfoComponent} from "./components/info/info.component";
import {ROUTES_ENUM} from "./constants/routing.constants";
import {LoginComponent} from "./components/login/login.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {AdminComponent} from "./components/admin/admin.component";
import {BookmarkOverviewComponent} from "./components/bookmark-overview/bookmark-overview.component";
import {BookmarkFormComponent} from "./components/bookmark-form/bookmark-form.component";
import {BookmarkDetailsComponent} from "./components/bookmark-details/bookmark-details.component";
import {BookmarksComponent} from "./components/bookmarks/bookmarks.component";
import {StageComponent} from "./components/stage/stage.component";
import {LinkComponent} from "./components/link/link.component";
import {MonitorComponent} from "./components/monitor/monitor.component";
import {SuperlativeScavengerComponent} from "./components/superlative-scavenger/superlative-scavenger.component";
import {MuppetListingComponent} from "./components/muppet-listing/muppet-listing.component";
import {MuppetDisplayComponent} from "./components/muppet-display/muppet-display.component";
import {MuppetFormComponent} from "./components/muppet-form/muppet-form.component";
import {MuppetRandomComponent} from "./components/muppet-random/muppet-random.component";
import {MuppetStatsComponent} from "./components/muppet-stats/muppet-stats.component";
import {TunnelGoonsGalleryComponent} from "./components/tunnel-goons-gallery/tunnel-goons-gallery.component";
import {TunnelGoonsGeneratorComponent} from "./components/tunnel-goons-generator/tunnel-goons-generator.component";
import {TunnelGoonDetailsComponent} from './components/tunnel-goon-details/tunnel-goon-details.component';
import {MissingWordComponent} from './components/missing-word/missing-word.component';
import {MarkdownViewerComponent} from './components/simple/markdown-viewer/markdown-viewer.component';

const routes: Routes = [
  // main
  {path: ROUTES_ENUM.Dashboard, component: DashboardComponent},
  {path: ROUTES_ENUM.Info, component: InfoComponent},
  {path: ROUTES_ENUM.Login, component: LoginComponent},
  {path: ROUTES_ENUM.Profile, component: ProfileComponent},
  {path: ROUTES_ENUM.Admin, component: AdminComponent},
  // projects
  {path: ROUTES_ENUM.Muppet, component: MuppetListingComponent},
  {path: ROUTES_ENUM.MuppetStats, component: MuppetStatsComponent},
  {path: ROUTES_ENUM.MuppetRandom, component: MuppetRandomComponent},
  {path: ROUTES_ENUM.Muppet, component: MuppetListingComponent},
  {path: ROUTES_ENUM.Muppet + "/:id", component: MuppetDisplayComponent},
  {path: ROUTES_ENUM.MuppetForm, component: MuppetFormComponent},
  {path: ROUTES_ENUM.MuppetForm + "/:id", component: MuppetFormComponent},
  {path: ROUTES_ENUM.Bookmarks, component: BookmarksComponent},
  {path: ROUTES_ENUM.BookmarkOverview, component: BookmarkOverviewComponent},
  {path: ROUTES_ENUM.BookmarkOverview + "/:id", component: BookmarkDetailsComponent},
  {path: ROUTES_ENUM.BookmarkForm, component: BookmarkFormComponent},
  {path: ROUTES_ENUM.BookmarkForm + "/:id", component: BookmarkFormComponent},
  {path: ROUTES_ENUM.Stage, component: StageComponent},
  {path: ROUTES_ENUM.Links, component: LinkComponent},
  {path: ROUTES_ENUM.Monitor, component: MonitorComponent},
  {path: ROUTES_ENUM.SuperlativeScavenger, component: SuperlativeScavengerComponent},
  {path: ROUTES_ENUM.MissingWord, component: MissingWordComponent},
  {path: ROUTES_ENUM.TunnelGoonsGallery, component: TunnelGoonsGalleryComponent},
  {path: ROUTES_ENUM.TunnelGoonsGallery + "/:partyName", component: TunnelGoonsGalleryComponent},
  {path: ROUTES_ENUM.TunnelGoonsGenerator, component: TunnelGoonsGeneratorComponent},
  {path: ROUTES_ENUM.TunnelGoons + "/:id", component: TunnelGoonDetailsComponent},
  {path: ROUTES_ENUM.MarkdownViewer + "/:path", component: MarkdownViewerComponent},
  // default
  {path: "**", redirectTo: ROUTES_ENUM.Dashboard},
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [RouterModule.forRoot(routes, {useHash: true, relativeLinkResolution: "legacy"})],
})
export class AppRoutingModule {
}
