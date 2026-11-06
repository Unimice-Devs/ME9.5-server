ServerEvents.recipes(event => {
    event.remove({ output: 'create_sa:block_picker' })
    event.remove({ output: 'dndesires:omni_speed_controller' })
    
    const infestedBlocks = [
        'minecraft:infested_stone',
        'minecraft:infested_cobblestone',
        'minecraft:infested_stone_bricks',
        'minecraft:infested_mossy_stone_bricks',
        'minecraft:infested_cracked_stone_bricks',
        'minecraft:infested_chiseled_stone_bricks'
    ]

    infestedBlocks.forEach(block => {
        event.remove({ output: block })
        event.remove({ input: block })
    })
})

ServerEvents.tags('item', event => {
    const itemsToAdd = [
        'create_aeronautics_toolgun:magnetic_gun',
        'create_aeronautics_toolgun:portable_structure_container',
        'create_aeronautics_toolgun:disposable_vehicle_container'
    ]

    event.add('ftbchunks:right_click_blacklist', itemsToAdd)
})
