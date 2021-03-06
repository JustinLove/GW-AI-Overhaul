// Remove the vanilla difficulties
$("#game-difficulty").empty()

// Add new difficulty levels
$('#game-difficulty').append('<option value="0">CASUAL</option>' +
  '<option value="1">BRONZE</option>' +
  '<option value="2">SILVER</option>' +
  '<option value="3">GOLD</option>' +
  '<option value="4">PLATINUM</option>' +
  '<option value="5">UBER</option>')

// Setup difficulties and add them to difficultyInfo
requireGW([
  'shared/gw_balance'
],
  function (balance) {
    balance.difficultyInfo.push(
      {
        // Casual
        rampDifficulty: true,
        adv_eco_mod: 3,
        adv_eco_mod_alone: 2.65,
        goForKill: false,
        microType: 0,
        neuralDataMod: 5,
        mandatoryMinions: 0,
        minionMod: 1,
        priority_scout_metal_spots: false,
        useEasierSystemTemplate: false,
        factory_build_delay_min: 0,
        factory_build_delay_max: 12,
        unable_to_expand_delay: 0,
        enable_commander_danger_responses: false,
        per_expansion_delay: 0,
        fabber_to_factory_ratio_basic: 10,
        fabber_to_factory_ratio_advanced: 5,
        fabber_alone_on_planet_mod: 1,
        basic_to_advanced_factory_ratio: 0,
        factory_alone_on_planet_mod: 1,
        min_basic_fabbers: 10,
        max_basic_fabbers: 10,
        min_advanced_fabbers: 3,
        max_advanced_fabbers: 10,
        personality_tags:
          [
            "SlowerExpansion",
            "Casual"
          ],
        econBase: 0.5,
        econRatePerDist: 0.05,
        metal_drain_check: 0.64,
        energy_drain_check: 0.77,
        metal_demand_check: 0.95,
        energy_demand_check: 0.92,
      },
      {
        // Bronze
        rampDifficulty: true,
        adv_eco_mod: 2,
        adv_eco_mod_alone: 1.75,
        goForKill: false,
        microType: 0,
        neuralDataMod: 2,
        mandatoryMinions: 0,
        minionMod: 1,
        priority_scout_metal_spots: true,
        useEasierSystemTemplate: false,
        factory_build_delay_min: 0,
        factory_build_delay_max: 6,
        unable_to_expand_delay: 0,
        enable_commander_danger_responses: true,
        per_expansion_delay: 0,
        fabber_to_factory_ratio_basic: 5,
        fabber_to_factory_ratio_advanced: 5,
        fabber_alone_on_planet_mod: 1,
        basic_to_advanced_factory_ratio: 0,
        factory_alone_on_planet_mod: 1,
        min_basic_fabbers: 5,
        max_basic_fabbers: 15,
        min_advanced_fabbers: 3,
        max_advanced_fabbers: 15,
        personality_tags:
          [
            "Bronze"
          ],
        econBase: 0.7,
        econRatePerDist: 0.05,
        metal_drain_check: 0.54,
        energy_drain_check: 0.77,
        metal_demand_check: 0.95,
        energy_demand_check: 0.92,
      },
      {
        // Silver
        rampDifficulty: true,
        adv_eco_mod: 1.5,
        adv_eco_mod_alone: 1.25,
        goForKill: true,
        microType: 1,
        neuralDataMod: 1.5,
        mandatoryMinions: 0,
        minionMod: 1,
        priority_scout_metal_spots: true,
        useEasierSystemTemplate: false,
        factory_build_delay_min: 0,
        factory_build_delay_max: 0,
        unable_to_expand_delay: 0,
        enable_commander_danger_responses: true,
        per_expansion_delay: 0,
        fabber_to_factory_ratio_basic: 2,
        fabber_to_factory_ratio_advanced: 1,
        fabber_alone_on_planet_mod: 1,
        basic_to_advanced_factory_ratio: 0,
        factory_alone_on_planet_mod: 1,
        min_basic_fabbers: 4,
        max_basic_fabbers: 20,
        min_advanced_fabbers: 3,
        max_advanced_fabbers: 20,
        personality_tags:
          [
            "Silver"
          ],
        econBase: 0.8,
        econRatePerDist: 0.1,
        metal_drain_check: 0.54,
        energy_drain_check: 0.77,
        metal_demand_check: 0.95,
        energy_demand_check: 0.92,
      },
      {
        // Gold
        rampDifficulty: true,
        adv_eco_mod: 1.35,
        adv_eco_mod_alone: 1,
        goForKill: true,
        microType: 2,
        neuralDataMod: 1.25,
        mandatoryMinions: 0,
        minionMod: 2,
        priority_scout_metal_spots: true,
        useEasierSystemTemplate: false,
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
        min_basic_fabbers: 3,
        max_basic_fabbers: 25,
        min_advanced_fabbers: 2,
        max_advanced_fabbers: 25,
        personality_tags:
          [
            "PreventsWaste",
            "Gold"
          ],
        econBase: 0.8,
        econRatePerDist: 0.1,
        metal_drain_check: 0.54,
        energy_drain_check: 0.77,
        metal_demand_check: 0.85,
        energy_demand_check: 0.92,
      },
      {
        // Platinum
        rampDifficulty: true,
        adv_eco_mod: 1,
        adv_eco_mod_alone: 0.85,
        goForKill: true,
        microType: 2,
        neuralDataMod: 1,
        mandatoryMinions: 1,
        minionMod: 2,
        priority_scout_metal_spots: true,
        useEasierSystemTemplate: false,
        factory_build_delay_min: 0,
        factory_build_delay_max: 0,
        unable_to_expand_delay: 0,
        enable_commander_danger_responses: true,
        per_expansion_delay: 0,
        fabber_to_factory_ratio_basic: 1,
        fabber_to_factory_ratio_advanced: 3,
        fabber_alone_on_planet_mod: 3,
        basic_to_advanced_factory_ratio: 0,
        factory_alone_on_planet_mod: 0.5,
        min_basic_fabbers: 2,
        max_basic_fabbers: 30,
        min_advanced_fabbers: 2,
        max_advanced_fabbers: 30,
        personality_tags:
          [
            "PreventsWaste",
            "Platinum"
          ],
        econBase: 0.8,
        econRatePerDist: 0.2,
        metal_drain_check: 0.54,
        energy_drain_check: 0.65,
        metal_demand_check: 0.85,
        energy_demand_check: 0.8,
      },
      {
        // Uber
        rampDifficulty: true,
        adv_eco_mod: 1,
        adv_eco_mod_alone: 0.85,
        goForKill: true,
        microType: 2,
        neuralDataMod: 1,
        mandatoryMinions: 0,
        minionMod: 2,
        priority_scout_metal_spots: true,
        useEasierSystemTemplate: false,
        factory_build_delay_min: 0,
        factory_build_delay_max: 0,
        unable_to_expand_delay: 0,
        enable_commander_danger_responses: true,
        per_expansion_delay: 0,
        fabber_to_factory_ratio_basic: 1,
        fabber_to_factory_ratio_advanced: 3,
        fabber_alone_on_planet_mod: 3,
        basic_to_advanced_factory_ratio: 0,
        factory_alone_on_planet_mod: 0.5,
        min_basic_fabbers: 3,
        max_basic_fabbers: 50,
        min_advanced_fabbers: 1,
        max_advanced_fabbers: 50,
        personality_tags:
          [
            "PreventsWaste",
            "Uber"
          ],
        econBase: 10,
        econRatePerDist: 0,
        metal_drain_check: 0.54,
        energy_drain_check: 0.65,
        metal_demand_check: 0.85,
        energy_demand_check: 0.8,
      }
    )
  })