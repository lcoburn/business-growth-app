import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashPage from "./pages/SplashPage";
import OnboardingPage from "./pages/OnboardingPage";
import HomePage from "./pages/HomePage";
import MarketingStrategy from "./pages/MarketingStrategy";
import Question1Page from "./pages/Question1Page";
import Question2Page from "./pages/Question2Page";
import LoadingScreen from "./pages/LoadingScreen";
import SuccessPage from "./pages/SuccessPage";
import WebsiteReview from "./pages/WebsiteReview";
import DetailsPage1 from "./pages/DetailsPage1";
import DetailsPage2 from "./pages/DetailsPage2";
import ResultsPage from "./pages/ResultsPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SplashPage />} />
                <Route path="/onboard" element={<OnboardingPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/strategy" element={<MarketingStrategy />} />
                <Route path="/question1" element={<Question1Page />} />
                <Route path="/question2" element={<Question2Page />} />
                <Route path="/loading" element={<LoadingScreen />} />
                <Route path="/success" element={<SuccessPage />} />
                <Route path="/review" element={<WebsiteReview />} />
                <Route path="/details1" element={<DetailsPage1 />} />
                <Route path="/details2" element={<DetailsPage2 />} />
                <Route path="/results" element={<ResultsPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
