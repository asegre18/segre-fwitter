import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css';



export default class App extends React.Component {
  state = {
    counter: 1,
    pokemonState: [],
    columnDefs: [
      {
        headerName: 'Name',
        field: 'name',
        flex: 1,
        suppressMenuHide: false,
      },
      {
        headerName: 'Image',
        flex: 1,
        sortable: false,
        cellRendererFramework: (params) => {
          return <img src={params.data.sprites.front_shiny}/>;
        }
      },
      {
        headerName: 'Base Stats',
        children: [
          {
            headerName: 'Base Hp',
            flex: 1,
            valueGetter:(params) => {
              return params.data.stats[0].base_stat;
            },
            cellRendererFramework: (params) => {
              return <h2>{params.data.stats[0].base_stat}</h2>
            }
          },
          {
            headerName: 'Base atk',
            flex: 1,
            valueGetter:(params) => {
              return params.data.stats[1].base_stat;
            },
            cellRenderer: (params) => {
              console.log(params);
              console.log(typeof params.data.stats[1].base_stat);
              return params.data.stats[1].base_stat;
            }
          },
          {
            headerName: 'Base def',
            flex: 1,
            valueGetter:(params) => {
              return params.data.stats[2].base_stat;
            },
            cellRenderer: (params) => {
              console.log(params);
              console.log(typeof params.data.stats[1].base_stat);
              return params.data.stats[2].base_stat;
            }
          },
        ]
      }
    ],
  };

  componentDidMount() {
    const self = this;
    try {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=800')
        .then(response => response.json())
        .then(async function (allpokemon) {
          const pokemonPromises = [];

          allpokemon.results.forEach(function (pokemon) {
            pokemonPromises.push(
              fetch(pokemon.url)
                .then(response => response.json())
            );
          });

          const pokemonResults = await Promise.all(pokemonPromises);
          self.setState({ pokemonState: pokemonResults });
        });
    } catch (e) {
      throw new Error(e);
    }
  }

  render() {
    console.log(this.state.pokemonState);
    return (
      <div className='ag-theme-alpine' style={{
        width: '100%',
        height: '100vh'
      }}>
        <AgGridReact
          defaultColDef={
            {
              filter: true,
              floatingFilter: true,
              suppressMenu: true,
              sortable: true,
            }// set filtering on for all columns
          }
          columnDefs={this.state.columnDefs}
          rowData={this.state.pokemonState}
          rowHeight={100}
          pagination={true}
          paginationPageSize={50}

        >
        </AgGridReact>

      </div>
    );
  }
}
