import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/app.sass";
import "./styles/dist/output.css";
import Page from "./components/Page";
import Home from "./screens/Home";
import UploadVariants from "./screens/UploadVariants";
import UploadDetails from "./screens/UploadDetails";
import ConnectWallet from "./screens/ConnectWallet";
import Faq from "./screens/Faq";
import Activity from "./screens/Activity";
import Search01 from "./screens/Search01";
import Search02 from "./screens/Search02";
import Profile from "./screens/Profile";
import ProfileEdit from "./screens/ProfileEdit";
import Item from "./screens/Item";
import PageList from "./screens/PageList";
import Event from "./screens/Event";
import PixExplorer from "./screens/PixExplorer";
import Region from "./screens/Regions";
import SubRegion from "./screens/Regions/SubRegions";
import Country from "./screens/Regions/Countries";
import ContactUs from "./screens/ContactUs";
import AboutUs from "./screens/AboutUs";
import Auction from "./screens/Search03";
import Upload2 from "./screens/UploadDetails/upload2";
import Search04 from "./screens/Home/Search04";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => (
          <Page>
            <Home />
          </Page>
        )}
        />

        <Route exact path="/upload-variants" render={() => (
          <Page>
            <UploadVariants />
          </Page>
        )}
        />


        <Route exact path="/swap" render={() => (
          <Page>
            <Search04 />
          </Page>
        )}
        />

        <Route exact path="/upload-details" render={() => (
          <Page>
            <UploadDetails />
          </Page>
        )}
        />

        <Route exact path="/upload-details2" render={() => (
          <Page>
            <Upload2 />
          </Page>
        )}
        />

        <Route exact path="/connect-wallet" render={() => (
          <Page>
            <ConnectWallet />
          </Page>
        )}
        />

        <Route exact path="/faq" render={() => (
          <Page>
            <Faq />
          </Page>
        )}
        />

        <Route exact path="/activity" render={() => (
          <Page>
            <Activity />
          </Page>
        )}
        />

        <Route exact path="/search01" render={() => (
          <Page>
            <Search01 />
          </Page>
        )}
        />

        <Route exact path="/profile" render={() => (
          <Page>
            <Profile />
          </Page>
        )}
        />


        <Route exact path="/profile/:index" render={() => (
          <Page>
            <Profile />
          </Page>
        )}
        />

        <Route exact path="/profile-edit" render={() => (
          <Page>
            <ProfileEdit />
          </Page>
        )}
        />

        <Route exact path="/item" render={() => (
          <Page>
            <Item />
          </Page>
        )}
        />

        <Route exact path="/item/:index" render={() => (
          <Page>
            <Item />
          </Page>
        )}
        />

        <Route exact path="/pagelist" render={() => (
          <Page>
            <PageList />
          </Page>
        )}
        />

        <Route exact path="/events" render={() => (
          <Page>
            <Event />
          </Page>
        )}
        />

        <Route exact path="/pix-explorer" render={() => (
          <Page>
            <PixExplorer />
          </Page>
        )}
        />

        <Route path="/region/:region" render={() => (
          <Page>
            <Region />
          </Page>
        )}
        />

        <Route path="/sub-region/:subRegion" render={() => (
          <Page>
            <SubRegion />
          </Page>
        )}
        />

        <Route path="/contact-us" render={() => (
          <Page>
            <ContactUs />
          </Page>
        )}
        />

        <Route path="/about-us" render={() => (
          <Page>
            <AboutUs />
          </Page>
        )}
        />

        <Route path="/country/:country" render={() => (
          <Page>
            <Country />
          </Page>
        )}
        />
        
        
        <Route path="/auction" render={() => (
          <Page>
            <Auction />
          </Page>
        )}
        />

        <Route path="*" render={() => (
          <Page>
            <Search02 />
          </Page>
        )}
        />
      </Switch>
    </Router>
  );
}

export default App;
