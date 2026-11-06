ServerEvents.recipes(event => {
	event.remove({ output: 'creaturefeature:scroll_bi' })
	event.remove({ output: 'creaturefeature:scroll_pride' })
	event.remove({ output: 'creaturefeature:scroll_pan' })
	event.remove({ output: 'creaturefeature:scroll_trans' })
	event.remove({ output: 'createutilities:polished_amethyst' })
	event.remove({ output: 'createutilities:graviton_tube' })
	event.remove({ output: 'createutilities:void_steel_ingot' })
	event.remove({ output: 'createutilities:void_tank' })
	event.remove({ output: 'createutilities:void_chest' })
	event.remove({ output: 'createutilities:void_motor' })
	event.remove({ output: 'createutilities:void_battery' })
	event.remove({ output: 'sophisticatedbackpacks:stack_upgrade_tier_3' })
	event.remove({ output: 'sophisticatedbackpacks:stack_upgrade_tier_4' })
	event.remove({ output: 'sophisticatedbackpacks:stack_upgrade_omega_tier' })
	event.remove({ output: 'dndesires:hydraulic_press' })
	event.remove({ output: 'dndesires:industrial_fan' })
	event.remove({ output: 'dndesires:gold_mixer' })
	event.remove({ output: 'create_aeronautics_toolgun:magnetic_gun' })
	event.remove({ output: 'create_aeronautics_toolgun:portable_structure_container' })
	event.remove({ output: 'create_aeronautics_toolgun:survival_structure_tool' })

	event.recipes.create.sequenced_assembly(
      [CreateItem.of('kubejs:hydraulic_mechanism', 1)],
      'create:copper_sheet', 
      [
        event.recipes.create.deploying('kubejs:incomplete_hydraulic_mechanism', ['kubejs:incomplete_hydraulic_mechanism', 'create:iron_sheet']),
		event.recipes.create.deploying('kubejs:incomplete_hydraulic_mechanism', ['kubejs:incomplete_hydraulic_mechanism', 'simulated:spring']),
        event.recipes.create.deploying('kubejs:incomplete_hydraulic_mechanism', ['kubejs:incomplete_hydraulic_mechanism', 'create:fluid_pipe']),
        event.recipes.create.deploying('kubejs:incomplete_hydraulic_mechanism', ['kubejs:incomplete_hydraulic_mechanism', 'create:fluid_pipe']),
		event.recipes.create.deploying('kubejs:incomplete_hydraulic_mechanism', ['kubejs:incomplete_hydraulic_mechanism', 'minecraft:glass']),
		event.recipes.create.deploying('kubejs:incomplete_hydraulic_mechanism', ['kubejs:incomplete_hydraulic_mechanism', 'electroenergetics:copper_wire'])
      ]
    ).transitionalItem('kubejs:incomplete_hydraulic_mechanism').loops(3)

	event.recipes.create.sequenced_assembly(
      [CreateItem.of('kubejs:thermal_mechanism', 1)],
      'create:sturdy_sheet', 
      [
        event.recipes.create.deploying('kubejs:incomplete_thermal_mechanism', ['kubejs:incomplete_thermal_mechanism', 'create:sturdy_sheet']),
		event.recipes.create.filling('kubejs:incomplete_thermal_mechanism', ['kubejs:incomplete_thermal_mechanism', Fluid.of('minecraft:water', 250)]),
		event.recipes.create.filling('kubejs:incomplete_thermal_mechanism', ['kubejs:incomplete_thermal_mechanism', Fluid.of('minecraft:lava', 250)]),
		event.recipes.create.deploying('kubejs:incomplete_thermal_mechanism', ['kubejs:incomplete_thermal_mechanism', 'simulated:spring']),
		event.recipes.create.deploying('kubejs:incomplete_thermal_mechanism', ['kubejs:incomplete_thermal_mechanism', 'create:copper_sheet']),
		event.recipes.create.pressing('kubejs:incomplete_thermal_mechanism', 'kubejs:incomplete_thermal_mechanism')
      ]
    ).transitionalItem('kubejs:incomplete_thermal_mechanism').loops(4)

	event.recipes.create.sequenced_assembly(
      [CreateItem.of('kubejs:void_mechanism', 1)],
      'createutilities:void_steel_sheet', 
      [
        event.recipes.create.deploying('kubejs:incomplete_void_mechanism', ['kubejs:incomplete_void_mechanism', 'createutilities:graviton_tube']),
		event.recipes.create.filling('kubejs:incomplete_void_mechanism', ['kubejs:incomplete_void_mechanism', Fluid.of('create_dragons_plus:dragon_breath', 200)]),
		event.recipes.create.filling('kubejs:incomplete_void_mechanism', ['kubejs:incomplete_void_mechanism', Fluid.of('create_enchantment_industry:experience', 1000)]),
		event.recipes.create.pressing('kubejs:incomplete_void_mechanism', 'kubejs:incomplete_void_mechanism')
      ]
    ).transitionalItem('kubejs:incomplete_void_mechanism').loops(5)
})
