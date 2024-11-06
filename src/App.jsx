import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashPage from "./pages/SplashPage";
import HomePage from "./pages/HomePage";
import MarketingStrategy from "./pages/MarketingStrategy";
import QuestionPage from "./pages/QuestionPage";
import LoadingScreen from "./pages/LoadingScreen";
import SuccessPage from "./pages/SuccessPage";
import WebsiteReview from "./pages/WebsiteReview";
import DetailsPage from "./pages/DetailsPage";
import ResultsPage from "./pages/ResultsPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SplashPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/strategy" element={<MarketingStrategy />} />
                <Route path="/question" element={<QuestionPage />} />
                <Route path="/loading" element={<LoadingScreen />} />
                <Route path="/success" element={<SuccessPage />} />
                <Route path="/review" element={<WebsiteReview />} />
                <Route path="/details" element={<DetailsPage />} />
                <Route path="/results" element={<ResultsPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
