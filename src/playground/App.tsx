// src/playground/App.tsx
import { ThemeProvider, useTheme } from "../context/ThemeProvider";
import {
  CUButton,
  CUCard,
  CUCheckbox,
  CUInput,
  CURadio,
  CUSelect,
  CUText,
  CUBox,
} from "../components";

// Themed content inside ThemeProvider
const ThemedContent = () => {
  const { setTheme } = useTheme();

  return (
    <div className="space-y-6 p-4">
      <CUText size="xl" weight="bold">
        Inside ThemeProvider
      </CUText>

      {/* Theme Switch Buttons */}
      <div className="flex gap-2">
        <CUButton onClick={() => setTheme("light")}>Light Theme</CUButton>
        <CUButton onClick={() => setTheme("dark")}>Dark Theme</CUButton>
        <CUButton
          onClick={() =>
            setTheme("custom", { bg: "#1a1a1a", text: "#fff", primary: "#ff5722" })
          }
        >
          Custom Theme
        </CUButton>
      </div>

      {/* Card with nested components */}
      <CUCard>
        <CUText size="lg" weight="medium">
          Sample Card Content
        </CUText>
        <CUBox className="space-y-2 mt-2">
          <CUInput label="Name" placeholder="Enter your name" />
          <CUSelect label="Country">
            <option value="">Select country</option>
            <option value="us">USA</option>
            <option value="in">India</option>
            <option value="uk">UK</option>
          </CUSelect>
          <CUCheckbox label="I agree to terms" />
          <CURadio name="gender" label="Male" value="male" />
          <CURadio name="gender" label="Female" value="female" />
        </CUBox>
        <CUButton className="mt-3">Submit</CUButton>
      </CUCard>
    </div>
  );
};

// Default content outside ThemeProvider
const DefaultContent = () => (
  <div className="space-y-6 p-4 mt-8 border-t border-gray-300">
    <CUText size="xl" weight="bold">
      Outside ThemeProvider
    </CUText>
    <CUCard>
      <CUText size="lg" weight="medium">
        Default Themed Card
      </CUText>
      <CUButton>Click Me</CUButton>
    </CUCard>
  </div>
);

const App = () => {
  return (
    <>
      <ThemeProvider
        config={{
          initialTheme: "custom",
          customColors: { bg: "#1a1a1a", text: "#fff", primary: "#ff5722" },
        }}
      >
        <ThemedContent />
      </ThemeProvider>

      <DefaultContent />
    </>
  );
};

export default App;