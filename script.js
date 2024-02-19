 const data='https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json'
//data fetching
 d3.json(data).then((data,error)=>maping(data,error)) 

   //drawing map
 function maping(data,error) {
     if(error){
        console.log(error);

     }
     else{
console.log(data);
   const w= 1300;
   const h= 600;
   //colors  for  each  specif node 
   const categoryColors = {
    'Wii': '#ffcc99',
    'DS': '#66ff66',
    'X360': '#66ccff',
    'GB': '#ff9999',
    'PS3': '#cc99ff',
    'NES': '#cc9999',
    'PS2': '#ffccff',
    '3DS': '#cccccc',
    'PS4': '#ffff99',
    'SNES': '#99ffff',
    'PS': '#cce5ff',
    'N64': '#ffcccc',
    'GBA': '#ffd699',
    'XB': '#ccffcc',
    'PC': '#e5ccff',
    '2600': '#ff9999',
    'PSP': '#ffccff',
    'XOne': '#ffcc66'
};

 //  converting data into hierarchial format
   const root= d3.hierarchy(data ,node=>node['children'])
                  .sum(node=>node['value'])
                  .sort((a,b)=>b['value']-a['value'])

  // calculating layout
            const treeMap =d3.treemap()
                          .size([w,h])

                 treeMap(root)
   //Drawing the tree map
          
    const  svg =d3.select('#svg')
               .attr('viewBox', `0 0 ${w}  ${h}` )

        const g= svg.selectAll('g')
                    .data(root.leaves())
                    .enter()
                    .append('g')
                    .attr('transform',data=>`translate(${data['x0']},${data['y0']})`)
                    .on('mouseover',(event ,games)=>{
                     const name= games.data.name
                     const value=games.data.value
                 d3.select('#tooltip')
                    .attr('data-value',value)
                    .html(`${name}\n ,value:${value}`)
                    .style('opacity',1)
                    .style('left', `${event.pageX+50}px`)
                    .style('top', `${event.pageY-70}px`)
                     
  
                })
                
               .on('mouseleave',()=>{
                      d3.select('#tooltip')
                          
                         .style('opacity',0)
               })

            g.append('rect')
               .attr('class','tile')
               .attr('data-name',d=>d.data.name )
               .attr('data-category', d=>d.data.category )
               .attr('data-value', d=>d.data.value)

              .attr('width', data=>data['x1']-data['x0'])
              .attr('height',data=>data['y1']-data['y0'] )
              .attr ('fill', games=>{
                const name =games.data.category;
                 return categoryColors[name]
              })
              .attr('stroke','white')
               
        
         g.append('text')                                           
        .selectAll('tspan')                                       
        .data(d => d.data.name.split(/(?=[A-Z][^A-Z])/g))  // split the name and use that as data to create indiviual tspan elements
        .enter()
        .append('tspan')                                          
        .attr('font-size', '12px')
        .attr('x', 4)
        .attr('y', (d, i) =>  13 + 10 * i*1.2)                         // offset the y positioning with the index of the data
        .text(d => d);

        //legend

        const arrayOfColors=Object.values(categoryColors);
        const ArrayOfNodeNames=Object.keys(categoryColors)

        const  xSCale=d3.scaleLinear()
                        .domain([0,arrayOfColors.length])
                         .range([50,w])
         
         const legend =d3.select('#legend')
                         .attr('viewBox',`0 0 ${w} ${200}` )
               
            legend.selectAll('rect')
                   .data(arrayOfColors)
                   .enter()
                   .append('rect')
                   .attr('class','legend-item')
                   .attr('x',(d,i)=>xSCale(i)+5 )
                   .attr('y', 60)
                   .attr('width', 15)
                   .attr('height', 15)
                   .attr('fill', d=>d)


             legend.selectAll('text')
                   .data(ArrayOfNodeNames)
                   .enter()
                   .append('text')
                   .attr('x',(d,i)=>xSCale(i) )
                   .attr('y', 100)
                   .text(d=>d)
     }
 }
     
