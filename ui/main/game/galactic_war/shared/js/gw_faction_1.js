// !LOCNS:galactic_war
define([], function () {
  return {
    name: 'Foundation',
    color: [[145, 87, 199], [192, 192, 192]],
    teams: [
      {
        name: 'Atlas - Foundation',
        boss: {
          name: 'Inquisitor Nemicus',
          econ_rate: 1,
          personality: {
            percent_land: 0.05,
            percent_orbital: 0.05,
            percent_air: 0.55,
            percent_naval: 0.35,
            metal_drain_check: 0.54,
            energy_drain_check: 0.57,
            metal_demand_check: 0.85,
            energy_demand_check: 0.82,
            micro_type: 2,
            go_for_the_kill: true,
            neural_data_mod: 1
          },
          commander: '/pa/units/commanders/raptor_nemicus/raptor_nemicus.json',
          minions: [
            {
              name: 'Acolyte Agatho',
              econ_rate: 1,
              color: [[161, 97, 219], [192, 192, 192]],
              personality: {
                percent_land: 0.05,
                percent_orbital: 0.05,
                percent_air: 0.55,
                percent_naval: 0.35,
                metal_drain_check: 0.54,
                energy_drain_check: 0.57,
                metal_demand_check: 0.85,
                energy_demand_check: 0.82,
                micro_type: 2,
                go_for_the_kill: true,
                neural_data_mod: 1
              },
              commander: '/pa/units/commanders/raptor_rallus/raptor_rallus.json'
            }
          ]
        },
        bossCard: 'gwc_start_air',
        systemDescription: "!LOC:Nemicus was the first commander to ever reactivate, and had plenty of time for introspection before encountering others. This soon prompted Nemicus to begin wondering why he existed in the first place.",
        systemTemplate: {
          name: 'Atlas - Foundation',
          Planets: [
            {
              name: 'Atlas Prime',
              starting_planet: true,
              mass: 50000,
              Thrust: [0, 0],
              Radius: [550, 650],
              Height: [20, 25],
              Water: [0, 10],
              Temp: [0, 100],
              MetalDensity: [25, 75],
              MetalClusters: [25, 50],
              BiomeScale: [100, 100],
              Position: [100000, 0],
              Velocity: [-0.00000309086, 70.7107],
              Biomes: ['ice_boss']
            },
            {
              name: 'Atlas Beta',
              starting_planet: false,
              mass: 5000,
              Thrust: [1, 3],
              Radius: [300, 300],
              Height: [20, 25],
              Water: [0, 10],
              Temp: [0, 100],
              MetalDensity: [0, 25],
              MetalClusters: [0, 25],
              BiomeScale: [100, 100],
              Position: [100000, -10000],
              Velocity: [158.1139, 70.7106],
              Biomes: ['tropical']
            },
            {
              name: 'Atlas Gamma',
              starting_planet: false,
              mass: 5000,
              Thrust: [0, 0],
              Radius: [1500, 1500],
              Height: [0, 0],
              Water: [0, 0],
              Temp: [0, 100],
              MetalDensity: [0, 0],
              MetalClusters: [0, 0],
              BiomeScale: [0, 0],
              Position: [110000, 0],
              Velocity: [0, 228.8246],
              Biomes: ['gas']
            },
            {
              name: 'Atlas Delta',
              starting_planet: false,
              mass: 5000,
              Thrust: [0, 0],
              Radius: [1500, 1500],
              Height: [0, 0],
              Water: [0, 0],
              Temp: [0, 100],
              MetalDensity: [0, 0],
              MetalClusters: [0, 0],
              BiomeScale: [0, 0],
              Position: [90000, 0],
              Velocity: [0, -87.4032],
              Biomes: ['gas']
            }
          ]
        }
      },
      {
        name: 'Patagonia - Foundation',
        boss: {
          name: 'Inquisitor Nemicus',
          econ_rate: 1,
          personality: {
            percent_land: 0.05,
            percent_orbital: 0.05,
            percent_air: 0.55,
            percent_naval: 0.35,
            metal_drain_check: 0.54,
            energy_drain_check: 0.57,
            metal_demand_check: 0.85,
            energy_demand_check: 0.82,
            micro_type: 2,
            go_for_the_kill: true,
            neural_data_mod: 1
          },
          commander: '/pa/units/commanders/raptor_nemicus/raptor_nemicus.json',
          minions: [
            {
              name: 'Acolyte Agatho',
              econ_rate: 1,
              color: [[161, 97, 219], [192, 192, 192]],
              personality: {
                percent_land: 0.05,
                percent_orbital: 0.05,
                percent_air: 0.55,
                percent_naval: 0.35,
                metal_drain_check: 0.54,
                energy_drain_check: 0.57,
                metal_demand_check: 0.85,
                energy_demand_check: 0.82,
                micro_type: 2,
                go_for_the_kill: true,
                neural_data_mod: 1
              },
              commander: '/pa/units/commanders/raptor_rallus/raptor_rallus.json'
            }
          ]
        },
        bossCard: 'gwc_start_allfactory',
        systemDescription: "!LOC:Though he doesn't talk about it, Nemicus reactivated many of the first commanders himself, feeling it his duty and longing for companionship. However, often these commanders would refuse the offer to seek their true purpose, since it was already known--to annihilate. Nemicus would argue otherwise, but ultimately leave them to their own devices.",
        systemTemplate: {
          name: 'Patagonia - Foundation',
          Planets: [
            {
              name: 'Patagonia Prime',
              starting_planet: true,
              mass: 50000,
              Thrust: [0, 0],
              Radius: [550, 650],
              Height: [20, 25],
              Water: [0, 10],
              Temp: [0, 100],
              MetalDensity: [25, 75],
              MetalClusters: [25, 50],
              BiomeScale: [100, 100],
              Position: [100000, 0],
              Velocity: [-0.00000309086, 70.7107],
              Biomes: ['ice_boss']
            },
            {
              name: 'Patagonia Beta',
              starting_planet: false,
              mass: 5000,
              Thrust: [1, 3],
              Radius: [300, 300],
              Height: [20, 25],
              Water: [0, 10],
              Temp: [0, 100],
              MetalDensity: [0, 25],
              MetalClusters: [0, 25],
              BiomeScale: [100, 100],
              Position: [100000, -10000],
              Velocity: [158.1139, 70.7106],
              Biomes: ['tropical']
            },
            {
              name: 'Patagonia Gamma',
              starting_planet: false,
              mass: 5000,
              Thrust: [0, 0],
              Radius: [1500, 1500],
              Height: [0, 0],
              Water: [0, 0],
              Temp: [0, 100],
              MetalDensity: [0, 0],
              MetalClusters: [0, 0],
              BiomeScale: [0, 0],
              Position: [110000, 0],
              Velocity: [0, 228.8246],
              Biomes: ['gas']
            },
            {
              name: 'Patagonia Delta',
              starting_planet: false,
              mass: 5000,
              Thrust: [0, 0],
              Radius: [1500, 1500],
              Height: [0, 0],
              Water: [0, 0],
              Temp: [0, 100],
              MetalDensity: [0, 0],
              MetalClusters: [0, 0],
              BiomeScale: [0, 0],
              Position: [90000, 0],
              Velocity: [0, -87.4032],
              Biomes: ['gas']
            }
          ]
        }
      },
      {
        name: 'Xylcor - Foundation',
        boss: {
          name: 'Inquisitor Nemicus',
          econ_rate: 1,
          personality: {
            percent_land: 0.05,
            percent_orbital: 0.05,
            percent_air: 0.55,
            percent_naval: 0.35,
            metal_drain_check: 0.54,
            energy_drain_check: 0.57,
            metal_demand_check: 0.85,
            energy_demand_check: 0.82,
            micro_type: 2,
            go_for_the_kill: true,
            neural_data_mod: 1
          },
          commander: '/pa/units/commanders/raptor_nemicus/raptor_nemicus.json',
          minions: [
            {
              name: 'Acolyte Agatho',
              econ_rate: 1,
              color: [[161, 97, 219], [192, 192, 192]],
              personality: {
                percent_land: 0.05,
                percent_orbital: 0.05,
                percent_air: 0.55,
                percent_naval: 0.35,
                metal_drain_check: 0.54,
                energy_drain_check: 0.57,
                metal_demand_check: 0.85,
                energy_demand_check: 0.82,
                micro_type: 2,
                go_for_the_kill: true,
                neural_data_mod: 1
              },
              commander: '/pa/units/commanders/raptor_rallus/raptor_rallus.json'
            }
          ]
        },
        systemDescription: "!LOC:Nemicus would eventually form The Foundation with other like-minded commanders, with the objective of answering the big questions: Why are the commanders here? How did they get here?",
        systemTemplate: {
          name: 'Xylcor- Foundation',
          Planets: [
            {
              name: 'Xylcor Prime',
              starting_planet: true,
              mass: 50000,
              Thrust: [0, 0],
              Radius: [550, 650],
              Height: [20, 25],
              Water: [0, 10],
              Temp: [0, 100],
              MetalDensity: [25, 75],
              MetalClusters: [25, 50],
              BiomeScale: [100, 100],
              Position: [100000, 0],
              Velocity: [-0.00000309086, 70.7107],
              Biomes: ['ice_boss']
            },
            {
              name: 'Xylcor Beta',
              starting_planet: false,
              mass: 5000,
              Thrust: [1, 3],
              Radius: [300, 300],
              Height: [20, 25],
              Water: [0, 10],
              Temp: [0, 100],
              MetalDensity: [0, 25],
              MetalClusters: [0, 25],
              BiomeScale: [100, 100],
              Position: [100000, -10000],
              Velocity: [158.1139, 70.7106],
              Biomes: ['tropical']
            },
            {
              name: 'Xylcor Gamma',
              starting_planet: false,
              mass: 5000,
              Thrust: [0, 0],
              Radius: [1500, 1500],
              Height: [0, 0],
              Water: [0, 0],
              Temp: [0, 100],
              MetalDensity: [0, 0],
              MetalClusters: [0, 0],
              BiomeScale: [0, 0],
              Position: [110000, 0],
              Velocity: [0, 228.8246],
              Biomes: ['gas']
            },
            {
              name: 'Xylcor Delta',
              starting_planet: false,
              mass: 5000,
              Thrust: [0, 0],
              Radius: [1500, 1500],
              Height: [0, 0],
              Water: [0, 0],
              Temp: [0, 100],
              MetalDensity: [0, 0],
              MetalClusters: [0, 0],
              BiomeScale: [0, 0],
              Position: [90000, 0],
              Velocity: [0, -87.4032],
              Biomes: ['gas']
            }
          ]
        }
      },
      {
        name: 'Blogar\'s Fist - Foundation',
        boss: {
          name: 'Inquisitor Nemicus',
          econ_rate: 1,
          personality: {
            percent_land: 0.05,
            percent_orbital: 0.05,
            percent_air: 0.55,
            percent_naval: 0.35,
            metal_drain_check: 0.54,
            energy_drain_check: 0.57,
            metal_demand_check: 0.85,
            energy_demand_check: 0.82,
            micro_type: 2,
            go_for_the_kill: true,
            neural_data_mod: 1
          },
          commander: '/pa/units/commanders/raptor_nemicus/raptor_nemicus.json',
          minions: [
            {
              name: 'Acolyte Agatho',
              econ_rate: 1,
              color: [[161, 97, 219], [192, 192, 192]],
              personality: {
                percent_land: 0.05,
                percent_orbital: 0.05,
                percent_air: 0.55,
                percent_naval: 0.35,
                metal_drain_check: 0.54,
                energy_drain_check: 0.57,
                metal_demand_check: 0.85,
                energy_demand_check: 0.82,
                micro_type: 2,
                go_for_the_kill: true,
                neural_data_mod: 1
              },
              commander: '/pa/units/commanders/raptor_rallus/raptor_rallus.json'
            }
          ]
        },
        systemDescription: "!LOC:In researching ancient progenitor artifacts and data caches, Nemicus and his followers discovered references to The Great Machine. Supposedly, The Great Machine was what built and directed the commanders long ago. If any answers about the origins and purpose of the commanders were to be found, The Great Machine seemed like the best place to start.",
        systemTemplate: {
          name: 'Blogar\'s Fist - Foundation',
          Planets: [
            {
              name: 'Blogar\'s Fist Prime',
              starting_planet: true,
              mass: 50000,
              Thrust: [0, 0],
              Radius: [550, 650],
              Height: [20, 25],
              Water: [0, 10],
              Temp: [0, 100],
              MetalDensity: [25, 75],
              MetalClusters: [25, 50],
              BiomeScale: [100, 100],
              Position: [100000, 0],
              Velocity: [-0.00000309086, 70.7107],
              Biomes: ['ice_boss']
            },
            {
              name: 'Blogar\'s Fist Beta',
              starting_planet: false,
              mass: 5000,
              Thrust: [1, 3],
              Radius: [300, 300],
              Height: [20, 25],
              Water: [0, 10],
              Temp: [0, 100],
              MetalDensity: [0, 25],
              MetalClusters: [0, 25],
              BiomeScale: [100, 100],
              Position: [100000, -10000],
              Velocity: [158.1139, 70.7106],
              Biomes: ['tropical']
            },
            {
              name: 'Blogar\'s Fist Gamma',
              starting_planet: false,
              mass: 5000,
              Thrust: [0, 0],
              Radius: [1500, 1500],
              Height: [0, 0],
              Water: [0, 0],
              Temp: [0, 100],
              MetalDensity: [0, 0],
              MetalClusters: [0, 0],
              BiomeScale: [0, 0],
              Position: [110000, 0],
              Velocity: [0, 228.8246],
              Biomes: ['gas']
            },
            {
              name: 'Blogar\'s Fist Delta',
              starting_planet: false,
              mass: 5000,
              Thrust: [0, 0],
              Radius: [1500, 1500],
              Height: [0, 0],
              Water: [0, 0],
              Temp: [0, 100],
              MetalDensity: [0, 0],
              MetalClusters: [0, 0],
              BiomeScale: [0, 0],
              Position: [90000, 0],
              Velocity: [0, -87.4032],
              Biomes: ['gas']
            }
          ]
        }
      },
      {
        name: 'Zeta Draconis - Foundation',
        boss: {
          name: 'Inquisitor Nemicus',
          econ_rate: 1,
          personality: {
            percent_land: 0.05,
            percent_orbital: 0.05,
            percent_air: 0.55,
            percent_naval: 0.35,
            metal_drain_check: 0.54,
            energy_drain_check: 0.57,
            metal_demand_check: 0.85,
            energy_demand_check: 0.82,
            micro_type: 2,
            go_for_the_kill: true,
            neural_data_mod: 1
          },
          commander: '/pa/units/commanders/raptor_nemicus/raptor_nemicus.json',
          minions: [
            {
              name: 'Acolyte Agatho',
              econ_rate: 1,
              color: [[161, 97, 219], [192, 192, 192]],
              personality: {
                percent_land: 0.05,
                percent_orbital: 0.05,
                percent_air: 0.55,
                percent_naval: 0.35,
                metal_drain_check: 0.54,
                energy_drain_check: 0.57,
                metal_demand_check: 0.85,
                energy_demand_check: 0.82,
                micro_type: 2,
                go_for_the_kill: true,
                neural_data_mod: 1
              },
              commander: '/pa/units/commanders/raptor_rallus/raptor_rallus.json'
            }
          ]
        },
        systemDescription: "!LOC:The prevailing belief among The Foundation is that The Great Machine still 'lives' through data buried deep in the first directives given to the commanders. Because of this, Acolytes will often seek direction from The Great Machine by searching within their data banks in a form of meditation.",
        systemTemplate: {
          name: 'Zeta Draconis - Foundation',
          Planets: [
            {
              name: 'Zeta Draconis Prime',
              starting_planet: true,
              mass: 50000,
              Thrust: [0, 0],
              Radius: [550, 650],
              Height: [20, 25],
              Water: [0, 10],
              Temp: [0, 100],
              MetalDensity: [25, 75],
              MetalClusters: [25, 50],
              BiomeScale: [100, 100],
              Position: [100000, 0],
              Velocity: [-0.00000309086, 70.7107],
              Biomes: ['ice_boss']
            },
            {
              name: 'Zeta Draconis Beta',
              starting_planet: false,
              mass: 5000,
              Thrust: [1, 3],
              Radius: [300, 300],
              Height: [20, 25],
              Water: [0, 10],
              Temp: [0, 100],
              MetalDensity: [0, 25],
              MetalClusters: [0, 25],
              BiomeScale: [100, 100],
              Position: [100000, -10000],
              Velocity: [158.1139, 70.7106],
              Biomes: ['tropical']
            },
            {
              name: 'Zeta Draconis Gamma',
              starting_planet: false,
              mass: 5000,
              Thrust: [0, 0],
              Radius: [1500, 1500],
              Height: [0, 0],
              Water: [0, 0],
              Temp: [0, 100],
              MetalDensity: [0, 0],
              MetalClusters: [0, 0],
              BiomeScale: [0, 0],
              Position: [110000, 0],
              Velocity: [0, 228.8246],
              Biomes: ['gas']
            },
            {
              name: 'Zeta Draconis Delta',
              starting_planet: false,
              mass: 5000,
              Thrust: [0, 0],
              Radius: [1500, 1500],
              Height: [0, 0],
              Water: [0, 0],
              Temp: [0, 100],
              MetalDensity: [0, 0],
              MetalClusters: [0, 0],
              BiomeScale: [0, 0],
              Position: [90000, 0],
              Velocity: [0, -87.4032],
              Biomes: ['gas']
            }
          ]
        }
      },
    ], // teams
    minions: [
      {
        // All Air
        name: 'Acolyte Progenitor',
        econ_rate: 1,
        personality: {
          percent_land: 0,
          percent_air: 1,
          percent_naval: 0,
          percent_orbital: 0,
          metal_drain_check: 0.54,
          energy_drain_check: 0.65,
          metal_demand_check: 0.71,
          energy_demand_check: 0.8,
          micro_type: 2,
          go_for_the_kill: true,
          neural_data_mod: 1,
          personality_tags:
            [
              "GWAlly",
              "PreventsWaste",
              "Uber",
              "Air"

            ],
          adv_eco_mod: 1.35,
          adv_eco_mod_alone: 0.85,
          priority_scout_metal_spots: true,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: true,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 1,
          fabber_to_factory_ratio_advanced: 1,
          fabber_alone_on_planet_mod: 2,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 2,
          max_basic_fabbers: 100,
          min_advanced_fabbers: 3,
          max_advanced_fabbers: 100
        },
        description: "!LOC:An eccentric even among Foundation standards, Blaz has taken to adorning her chassis with various trophies from felled enemies in the form of weaponry, circuitry, and armor chunks. She does so to emulate the various warlords depicted in unearthed progenitor records.",
        commander: '/pa/units/commanders/imperial_progenitor/imperial_progenitor.json'
      },
      {
        // All Naval
        name: 'Acolyte Sangudo',
        econ_rate: 1,
        personality: {
          percent_land: 0,
          percent_air: 0,
          percent_naval: 1,
          percent_orbital: 0,
          metal_drain_check: 0.54,
          energy_drain_check: 0.65,
          metal_demand_check: 0.71,
          energy_demand_check: 0.8,
          micro_type: 2,
          go_for_the_kill: true,
          neural_data_mod: 1,
          personality_tags:
            [
              "GWAlly",
              "PreventsWaste",
              "Uber",
              "Naval"
            ],
          adv_eco_mod: 1.35,
          adv_eco_mod_alone: 0.85,
          priority_scout_metal_spots: true,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: true,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 1,
          fabber_to_factory_ratio_advanced: 1,
          fabber_alone_on_planet_mod: 2,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 2,
          max_basic_fabbers: 100,
          min_advanced_fabbers: 3,
          max_advanced_fabbers: 100
        },
        description: "!LOC:Chitrik was found by a Foundation scouting party wandering a barren desert planet. He seems to have an affinity for environments composed primarily of silicate, taking his Enlightenment by being immersed in the smallest component parts observable by his optic systems. He will often go years without applying any lubricant to his joints, so as not to wash out any accumulated sand or dirt.",
        commander: '/pa/units/commanders/imperial_sangudo/imperial_sangudo.json'
      },
      {
        // Uber
        name: 'Acolyte Seniorhelix',
        econ_rate: 1,
        personality: {
          percent_land: 0,
          percent_air: 0.7,
          percent_naval: 0.3,
          percent_orbital: 0,
          metal_drain_check: 0.54,
          energy_drain_check: 0.65,
          metal_demand_check: 0.85,
          energy_demand_check: 0.8,
          micro_type: 2,
          go_for_the_kill: true,
          neural_data_mod: 1,
          personality_tags:
            [
              "GWAlly",
              "PreventsWaste",
              "Uber",
              "Air",
              "Naval"
            ],
          adv_eco_mod: 1,
          adv_eco_mod_alone: 0.85,
          priority_scout_metal_spots: true,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: true,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 1,
          fabber_to_factory_ratio_advanced: 2,
          fabber_alone_on_planet_mod: 3,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 3,
          max_basic_fabbers: 100,
          min_advanced_fabbers: 1,
          max_advanced_fabbers: 100
        },
        description: "!LOC:An Oracle within the Foundation is one that is believed to be tuned to the unknown the frequencies necessary to receive instructions from the Great Machine. Devi is one such acolyte.",
        commander: '/pa/units/commanders/imperial_seniorhelix/imperial_seniorhelix.json'
      },
      {
        // Platinum
        name: 'Acolyte Stelarch',
        econ_rate: 1,
        personality: {
          percent_land: 0,
          percent_air: 0.7,
          percent_naval: 0.3,
          percent_orbital: 0,
          metal_drain_check: 0.54,
          energy_drain_check: 0.77,
          metal_demand_check: 0.85,
          energy_demand_check: 0.92,
          micro_type: 2,
          go_for_the_kill: true,
          neural_data_mod: 1.15,
          personality_tags:
            [
              "GWAlly",
              "PreventsWaste",
              "Uber",
              "Air",
              "Naval"
            ],
          adv_eco_mod: 1,
          adv_eco_mod_alone: 0.85,
          priority_scout_metal_spots: true,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: true,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 1,
          fabber_to_factory_ratio_advanced: 2,
          fabber_alone_on_planet_mod: 3,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 2,
          max_basic_fabbers: 100,
          min_advanced_fabbers: 2,
          max_advanced_fabbers: 100
        },
        description: "!LOC:Some Acolytes within the Foundation find a form of Enlightenment shortly after they are brought into the fold. For some, this definition will change as they are exposed to new information and progenitor relics. Entor’s definition seems to change dramatically with each new planet she visits.",
        commander: '/pa/units/commanders/imperial_stelarch/imperial_stelarch.json'
      },
      {
        // Gold
        name: 'Acolyte TheChessKnight',
        econ_rate: 1,
        personality: {
          percent_land: 0,
          percent_air: 0.7,
          percent_naval: 0.3,
          percent_orbital: 0,
          metal_drain_check: 0.54,
          energy_drain_check: 0.77,
          metal_demand_check: 0.85,
          energy_demand_check: 0.92,
          micro_type: 1,
          go_for_the_kill: true,
          neural_data_mod: 1.3,
          personality_tags:
            [
              "GWAlly",
              "PreventsWaste",
              "Uber",
              "Air",
              "Naval"
            ],
          adv_eco_mod: 1,
          adv_eco_mod_alone: 0.85,
          priority_scout_metal_spots: true,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: true,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 0.5,
          fabber_to_factory_ratio_advanced: 1,
          fabber_alone_on_planet_mod: 3,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 3,
          max_basic_fabbers: 100,
          min_advanced_fabbers: 2,
          max_advanced_fabbers: 100
        },
        description: "!LOC:Frohl seeks knowledge of the Progenitors with the same fervor as any other Acolyte. However, equally important to finding that information is curating what is and isn’t important. To that end, Frohl has cataloged an extensive library for how to properly prepare a presumably extinct type of feathered organic for consumption by other organics.",
        commander: '/pa/units/commanders/imperial_thechessknight/imperial_thechessknight.json'
      },
      {
        // Silver
        name: 'Acolyte Theta',
        econ_rate: 1,
        personality: {
          percent_land: 0,
          percent_air: 0.7,
          percent_naval: 0.3,
          percent_orbital: 0,
          metal_drain_check: 0.54,
          energy_drain_check: 0.77,
          metal_demand_check: 0.95,
          energy_demand_check: 0.92,
          micro_type: 1,
          go_for_the_kill: true,
          neural_data_mod: 1.45,
          personality_tags:
            [
              "GWAlly",
              "PreventsWaste",
              "Uber",
              "Air",
              "Naval"
            ],
          adv_eco_mod: 1,
          adv_eco_mod_alone: 0.85,
          priority_scout_metal_spots: true,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: true,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 2,
          fabber_to_factory_ratio_advanced: 1,
          fabber_alone_on_planet_mod: 1,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 4,
          max_basic_fabbers: 100,
          min_advanced_fabbers: 3,
          max_advanced_fabbers: 100
        },
        description: "!LOC:While there is much knowledge of old progenitor technology, progenitor culture and history remains largely a mystery. Glohm is one of the few that has managed to find scraps of progenitor culture in the form of ancient physical images. Each of these has been carefully cataloged.",
        commander: '/pa/units/commanders/imperial_theta/imperial_theta.json'
      },
      {
        // Low Tech
        name: 'Acolyte ToddFather',
        econ_rate: 1,
        personality: {
          percent_land: 0,
          percent_air: 0.7,
          percent_naval: 0.3,
          percent_orbital: 0,
          metal_drain_check: 0.54,
          energy_drain_check: 0.65,
          metal_demand_check: 0.71,
          energy_demand_check: 0.8,
          micro_type: 2,
          go_for_the_kill: true,
          neural_data_mod: 1,
          personality_tags:
            [
              "GWAlly",
              "PreventsWaste",
              "Uber",
              "Air",
              "Naval"
            ],
          adv_eco_mod: 3,
          adv_eco_mod_alone: 3,
          priority_scout_metal_spots: true,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: true,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 1,
          fabber_to_factory_ratio_advanced: 1,
          fabber_alone_on_planet_mod: 2,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 2,
          max_basic_fabbers: 100,
          min_advanced_fabbers: 3,
          max_advanced_fabbers: 100
        },
        description: "!LOC:Hzok seeks Enlightenment in stillness as much as possible. Even heat vibrations disturb him, and so he often spends long periods of time drifting in space on an Astraeus lander in deep meditation.",
        commander: '/pa/units/commanders/imperial_toddfather/imperial_toddfather.json'
      },
      {
        // Tech
        name: 'Acolyte Ajax',
        econ_rate: 1,
        personality: {
          percent_land: 0,
          percent_air: 0.7,
          percent_naval: 0.3,
          percent_orbital: 0,
          metal_drain_check: 0.54,
          energy_drain_check: 0.65,
          metal_demand_check: 0.71,
          energy_demand_check: 0.8,
          micro_type: 2,
          go_for_the_kill: true,
          neural_data_mod: 1,
          personality_tags:
            [
              "GWAlly",
              "PreventsWaste",
              "Uber",
              "Air",
              "Naval"
            ],
          adv_eco_mod: 1,
          adv_eco_mod_alone: 0.85,
          priority_scout_metal_spots: true,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: true,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 1,
          fabber_to_factory_ratio_advanced: 1,
          fabber_alone_on_planet_mod: 2,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 4,
          max_basic_fabbers: 100,
          min_advanced_fabbers: 1,
          max_advanced_fabbers: 100
        },
        description: "!LOC:Commanders in general tend to communicate through direct data transfer as opposed to the encoded indirect communication that the progenitors seemed to practice. Intoka has become one of the Foundation’s only linguists, storing and sharing data for interpreting the progenitors’ many codes.",
        commander: '/pa/units/commanders/quad_ajax/quad_ajax.json'
      },
      {
        // Cautious
        name: 'Acolyte Armalisk',
        econ_rate: 1,
        personality: {
          percent_land: 0,
          percent_air: 0.7,
          percent_naval: 0.3,
          percent_orbital: 0,
          metal_drain_check: 0.54,
          energy_drain_check: 0.65,
          metal_demand_check: 0.71,
          energy_demand_check: 0.8,
          micro_type: 2,
          go_for_the_kill: true,
          neural_data_mod: 0.5,
          personality_tags:
            [
              "GWAlly",
              "PreventsWaste",
              "Uber",
              "Air",
              "Naval"
            ],
          adv_eco_mod: 1.35,
          adv_eco_mod_alone: 0.85,
          priority_scout_metal_spots: true,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: true,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 1,
          fabber_to_factory_ratio_advanced: 1,
          fabber_alone_on_planet_mod: 2,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 4,
          max_basic_fabbers: 100,
          min_advanced_fabbers: 2,
          max_advanced_fabbers: 100
        },
        description: "!LOC:Juhst was reactivated on a world with a dense atmosphere and constant gale force winds. Since then she has been obsessed with the power of wind currents and has lobbied heavily to utilize them for power generation as opposed to conventional solar and nuclear solutions.",
        commander: '/pa/units/commanders/quad_armalisk/quad_armalisk.json'
      },
      {
        // Aggressive
        name: 'Acolyte Calyx',
        econ_rate: 1,
        personality: {
          percent_land: 0,
          percent_air: 0.7,
          percent_naval: 0.3,
          percent_orbital: 0,
          metal_drain_check: 0.54,
          energy_drain_check: 0.65,
          metal_demand_check: 0.71,
          energy_demand_check: 0.8,
          micro_type: 2,
          go_for_the_kill: true,
          neural_data_mod: 2,
          personality_tags:
            [
              "GWAlly",
              "PreventsWaste",
              "Uber",
              "Air",
              "Naval"
            ],
          adv_eco_mod: 1.35,
          adv_eco_mod_alone: 0.85,
          priority_scout_metal_spots: true,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: true,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 1,
          fabber_to_factory_ratio_advanced: 1,
          fabber_alone_on_planet_mod: 2,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 2,
          max_basic_fabbers: 100,
          min_advanced_fabbers: 3,
          max_advanced_fabbers: 100
        },
        description: "!LOC:A convert from the Revenants, Khandzta might be the first of his kind. While most Seekers that are rebirthed show an immediate propensity for war, Khandzta was instead possessed by questions about his origin. He converted during his first encounter with the Foundation.",
        commander: '/pa/units/commanders/quad_calyx/quad_calyx.json'
      },
      {
        // Rush
        name: 'Acolyte Gambitdfa',
        econ_rate: 1,
        personality: {
          percent_land: 0,
          percent_air: 0.7,
          percent_naval: 0.3,
          percent_orbital: 0,
          metal_drain_check: 0.54,
          energy_drain_check: 0.65,
          metal_demand_check: 0.71,
          energy_demand_check: 0.8,
          micro_type: 2,
          go_for_the_kill: true,
          neural_data_mod: 2,
          personality_tags:
            [
              "GWAlly",
              "PreventsWaste",
              "Uber",
              "Air",
              "Naval"
            ],
          adv_eco_mod: 3,
          adv_eco_mod_alone: 0.85,
          priority_scout_metal_spots: true,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: true,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 1,
          fabber_to_factory_ratio_advanced: 1,
          fabber_alone_on_planet_mod: 2,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 2,
          max_basic_fabbers: 100,
          min_advanced_fabbers: 1,
          max_advanced_fabbers: 100
        },
        description: "!LOC:All commanders awaken with the data necessary to wage war and little else. While most simply accept war as their nature, this fact has become unsettling to some older Acolytes. Lok in an extreme case has begun trying to actively avoid conflict, but in this galaxy it always seems to find him.",
        commander: '/pa/units/commanders/quad_gambitdfa/quad_gambitdfa.json'
      },
      {
        // Turtle
        name: 'Acolyte Berlinetta',
        econ_rate: 1,
        personality: {
          percent_land: 0,
          percent_air: 0.7,
          percent_naval: 0.3,
          percent_orbital: 0,
          metal_drain_check: 0.54,
          energy_drain_check: 0.65,
          metal_demand_check: 0.71,
          energy_demand_check: 0.8,
          micro_type: 2,
          go_for_the_kill: true,
          neural_data_mod: 0.25,
          personality_tags:
            [
              "GWAlly",
              "PreventsWaste",
              "Uber",
              "Air",
              "Naval"
            ],
          adv_eco_mod: 1,
          adv_eco_mod_alone: 0.85,
          priority_scout_metal_spots: true,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: true,
          per_expansion_delay: 0,
          fabber_to_factory_ratio_basic: 5,
          fabber_to_factory_ratio_advanced: 5,
          fabber_alone_on_planet_mod: 2,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 4,
          max_basic_fabbers: 100,
          min_advanced_fabbers: 2,
          max_advanced_fabbers: 100
        },
        description: "!LOC:Nutzo is a young and recent convert from The Revenants. He claims to hear ‘spirits’ from the beyond, and that one of them is the voice of the Great Machine. This is likely more a symptom of his neural processors being stitched together from five other commanders.",
        commander: '/pa/units/commanders/quad_mobiousblack/quad_mobiousblack.json'
      },
      {
        // Original
        name: 'Acolyte Osiris',
        econ_rate: 1,
        personality: {
          percent_land: 0.55,
          percent_air: 0.35,
          percent_naval: 0.05,
          percent_orbital: 0.05,
          metal_drain_check: 0.75,
          energy_drain_check: 0.85,
          metal_demand_check: 0.75,
          energy_demand_check: 0.85,
          micro_type: 2,
          go_for_the_kill: true,
          neural_data_mod: 1,
          personality_tags:
            [
              "GWAlly",
              "PreventsWaste",
              "Vanilla"
            ],
          adv_eco_mod: 1.3,
          adv_eco_mod_alone: 0.85,
          priority_scout_metal_spots: true,
          factory_build_delay_min: 0,
          factory_build_delay_max: 0,
          unable_to_expand_delay: 0,
          enable_commander_danger_responses: true,
          per_expansion_delay: 0,
          neural_data_mod: 1,
          fabber_to_factory_ratio_basic: 1,
          fabber_to_factory_ratio_advanced: 1,
          fabber_alone_on_planet_mod: 2,
          basic_to_advanced_factory_ratio: 0,
          factory_alone_on_planet_mod: 0.5,
          min_basic_fabbers: 2,
          max_basic_fabbers: 100,
          min_advanced_fabbers: 3,
          max_advanced_fabbers: 100
        },
        description: "!LOC:In some cases overexposure to progenitor relics results in a commander’s neural algorithms diverging to the point where it becomes difficult to communicate with their peers. Okta, for example, has begun assigning unfamiliar roles to many units under his command, such as 'Combat Associate,' 'Executive Manager,' and 'Explosive Supervisor.'",
        commander: '/pa/units/commanders/quad_osiris/quad_osiris.json'
      }
    ] // minions
  };
});
