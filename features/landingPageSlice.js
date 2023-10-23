import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    title: "Bleach's Manga Is Far Better Than the Anime - Here's Why",
    description:
      "Bleach (stylized in cool font) is a Japanese anime television series based on Tite Kubo's original manga series of the same name. It was produced by Studio Pierrot and directed by Noriyuki Abe. The series aired on TV Tokyo from October 2004 to March 2012, spanning 366 episodes. The story follows the adventures of Ichigo Kurosaki after he obtains the powers of a Soul Reaper—a death personification similar to the Grim Reaper—from another Soul Reaper, Rukia Kuchiki. His newfound powers force him to take on the duties of defending humans from evil spirits and guiding departed souls to the afterlife. In addition to adapting the manga series it is based on, the anime periodically includes original self-contained storylines and characters not found in the source material. Viz Media obtained foreign television and home video distribution rights to the Bleach anime in March 2006. Bleach was broadcast in the United States on Adult Swim from September 2006 to November 2014. Bleach: Thousand-Year Blood War, a sequel series covering the manga's final story arc, also animated by Pierrot and directed by Tomohisa Taguchi, aired its first 13-episode cour on TV Tokyo from October to December 2022. The second 13-episode cour aired from July to September 2023. The third cour is set to premiere in 2024",
    imageUrl:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7d3ef723-eb25-4365-9952-a75f9460f1d2/d5t5qh9-37b00bd1-9e50-4415-ab27-13242cded92a.png/v1/fit/w_600,h_1169/kurosaki_ichigo__bleach___render_by_obedragon_d5t5qh9-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE2OSIsInBhdGgiOiJcL2ZcLzdkM2VmNzIzLWViMjUtNDM2NS05OTUyLWE3NWY5NDYwZjFkMlwvZDV0NXFoOS0zN2IwMGJkMS05ZTUwLTQ0MTUtYWIyNy0xMzI0MmNkZWQ5MmEucG5nIiwid2lkdGgiOiI8PTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.EM-nFYUZdBgrT4dPnWIxX-qiiSWaqVDs479YvLLz3Gw",
    id: 1698064431232,
  },
];

const landingPageSlice = createSlice({
  name: "landingPage",
  initialState: initialState,
  reducers: {
    addLandingPage: (state, action) => {
      state.push(action.payload);
    },
    editLandingPage: (state, action) => {
      const { id, title, description, imageUrl } = action.payload;
      const landingPage = state.find((page) => page.id === id);
      if (landingPage) {
        landingPage.title = title;
        landingPage.description = description;
        landingPage.imageUrl = imageUrl;
      }
    },
    deleteLandingPage: (state, action) => {
      const id = action.payload;
      return state.filter((page) => page.id !== id);
    },
  },
});

export const { addLandingPage, editLandingPage, deleteLandingPage } =
  landingPageSlice.actions;

export default landingPageSlice.reducer;
