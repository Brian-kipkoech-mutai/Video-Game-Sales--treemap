# Video-Game-Sales--treemap
# Video Game Sales - Tree Map Visualization

This project presents a tree map visualization displaying the top 100 most sold video games grouped by platform. It utilizes D3.js, a JavaScript library for manipulating documents based on data.

## How to Use

1. **Viewing the Visualization:**
   - Open the provided HTML file (`index.html`) in a web browser that supports JavaScript and SVG rendering.
   - Alternatively, deploy the project on a web server to access it online.

2. **Interacting with the Visualization:**
   - Hover over each tile on the tree map to display a tooltip showing the name and sales value of the corresponding video game.
   - The color of each tile represents the platform/category of the video game.
   - Use the legend provided to understand the color-coding for different platforms/categories.

## File Structure

- `index.html`: HTML file containing the structure of the web page and script references.
- `style.css`: Cascading Style Sheets (CSS) file for styling the elements of the visualization.
- `script.js`: JavaScript file containing the D3.js code for fetching data, rendering the tree map, and handling interactions.
 
## External Dependencies

- D3.js library: The project utilizes the D3.js library for data visualization and manipulation. Ensure that D3.js is properly included and loaded in the HTML file.

  

## Development and Customization

- To modify the visualization or customize its appearance, edit the `script.js` file. You can adjust parameters such as the size of the tree map, color schemes, tooltip behavior, etc.
- You can also update the data source by replacing the `video-game-sales-data.json` file with your own dataset, following the same hierarchical structure.

- **Data Source:** The data for the visualization is fetched directly in the `script.js` file using the `d3.json()` function. The data source link is [here](https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json).

## Compatibility

- The visualization is compatible with modern web browsers that support JavaScript and SVG rendering.
- Ensure that the browser has JavaScript enabled to properly interact with and view the visualization.

## Acknowledgments

This project was created as part of the FreeCodeCamp curriculum for data visualization projects. Special thanks to FreeCodeCamp for providing the dataset and project specifications.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to modify, distribute, and use it for your own purposes.
