
const FACTION_ICONS = {
    'SpaceTech': 'https://static.wikia.nocookie.net/walking-war-robots/images/b/b0/Spacetech_W.png',
    'Defense and Security<br>Conglomerate': 'https://static.wikia.nocookie.net/walking-war-robots/images/5/50/DSC_W.png',
    'Icarus Technologies': 'https://static.wikia.nocookie.net/walking-war-robots/images/3/3e/Icarus_W.png',
    'Evolife': 'https://static.wikia.nocookie.net/walking-war-robots/images/3/31/Evolife_W.png',
    'Yan-di Ventures': 'https://static.wikia.nocookie.net/walking-war-robots/images/a/a2/Yan-di_W.png',
    '_default': '⚙️'
};

const ROBOTS = [
    {
        "id": null,
        "name": "Cossack",
        "faction": "SpaceTech",
        "specializations": [],
        "tier": 1,
        "hardpoints": {
            "light": 0,
            "medium": 1,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/7/regular_detail_picture-249342c3e6ea2591f3e4c293786ced92.jpg",
        "icon": "https://api.warrobots.com/storage/robot/7/regular_preview_picture-249342c3e6ea2591f3e4c293786ced92.jpg"
    },
    {
        "id": null,
        "name": "Destrier",
        "faction": "Defense and Security<br>Conglomerate",
        "specializations": [],
        "tier": 1,
        "hardpoints": {
            "light": 2,
            "medium": 0,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/6/regular_detail_picture-92ba3ae63140c6b1b5b55aa5ea02d265.jpg",
        "icon": "https://api.warrobots.com/storage/robot/6/regular_preview_picture-92ba3ae63140c6b1b5b55aa5ea02d265.jpg"
    },
    {
        "id": null,
        "name": "Gepard",
        "faction": "Icarus Technologies",
        "specializations": [],
        "tier": 1,
        "hardpoints": {
            "light": 3,
            "medium": 0,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/8/regular_detail_picture-5285edb81171a2e9594650d71f3b63ac.jpg",
        "icon": "https://api.warrobots.com/storage/robot/8/regular_preview_picture-5285edb81171a2e9594650d71f3b63ac.jpg"
    },
    {
        "id": null,
        "name": "Gl. Patton",
        "faction": "Defense and Security<br>Conglomerate",
        "specializations": [],
        "tier": 1,
        "hardpoints": {
            "light": 4,
            "medium": 0,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/16/regular_detail_picture-28008e54b995f941d326cba7b8651dfe.jpg",
        "icon": "https://api.warrobots.com/storage/robot/16/regular_preview_picture-28008e54b995f941d326cba7b8651dfe.jpg"
    },
    {
        "id": null,
        "name": "Schutze",
        "faction": "Icarus Technologies",
        "specializations": [],
        "tier": 1,
        "hardpoints": {
            "light": 0,
            "medium": 0,
            "heavy": 1
        },
        "image": "https://api.warrobots.com/storage/robot/9/regular_detail_picture-78144a8fdc7d91aa1dcdbb66e06d8803.jpg",
        "icon": "https://api.warrobots.com/storage/robot/9/regular_preview_picture-78144a8fdc7d91aa1dcdbb66e06d8803.jpg"
    },
    {
        "id": null,
        "name": "Bolt",
        "faction": "Evolife",
        "specializations": [],
        "tier": 1,
        "hardpoints": {
            "light": 3,
            "medium": 0,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/51/regular_detail_picture-8c7b11524b14ecb550ff6d8555febb95.jpg",
        "icon": "https://api.warrobots.com/storage/robot/51/regular_preview_picture-8c7b11524b14ecb550ff6d8555febb95.jpg"
    },
    {
        "id": null,
        "name": "Gareth",
        "faction": "Defense and Security<br>Conglomerate",
        "specializations": [],
        "tier": 1,
        "hardpoints": {
            "light": 1,
            "medium": 1,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/19/regular_detail_picture-d796765d01f3fdf61748632f7a35ee64.jpg",
        "icon": "https://api.warrobots.com/storage/robot/19/regular_preview_picture-d796765d01f3fdf61748632f7a35ee64.jpg"
    },
    {
        "id": null,
        "name": "Golem",
        "faction": "Yan-di Ventures",
        "specializations": [],
        "tier": 1,
        "hardpoints": {
            "light": 1,
            "medium": 1,
            "heavy": 1
        },
        "image": "https://api.warrobots.com/storage/robot/11/regular_detail_picture-9e910019393d4e4c2c61bf8524e1bd9c.jpg",
        "icon": "https://api.warrobots.com/storage/robot/11/regular_preview_picture-9e910019393d4e4c2c61bf8524e1bd9c.jpg"
    },
    {
        "id": null,
        "name": "Jesse",
        "faction": "Defense and Security<br>Conglomerate",
        "specializations": [],
        "tier": 1,
        "hardpoints": {
            "light": 4,
            "medium": 0,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/1/regular_detail_picture-41983461274a427dc120a45367a08fb3.jpg",
        "icon": "https://api.warrobots.com/storage/robot/1/regular_preview_picture-41983461274a427dc120a45367a08fb3.jpg"
    },
    {
        "id": null,
        "name": "Vityaz",
        "faction": "SpaceTech",
        "specializations": [],
        "tier": 1,
        "hardpoints": {
            "light": 2,
            "medium": 0,
            "heavy": 1
        },
        "image": "https://api.warrobots.com/storage/robot/10/regular_detail_picture-b6f3110cf0b625b0e9cb43a3db37ae25.jpg",
        "icon": "https://api.warrobots.com/storage/robot/10/regular_preview_picture-b6f3110cf0b625b0e9cb43a3db37ae25.jpg"
    },
    {
        "id": null,
        "name": "Rogatka",
        "faction": "SpaceTech",
        "specializations": [],
        "tier": 1,
        "hardpoints": {
            "light": 0,
            "medium": 2,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/17/regular_detail_picture-fc3c2f7e04f5ddfa27128d66a2eb3173.jpg",
        "icon": "https://api.warrobots.com/storage/robot/17/regular_preview_picture-fc3c2f7e04f5ddfa27128d66a2eb3173.jpg"
    },
    {
        "id": null,
        "name": "Boa",
        "faction": "Icarus Technologies",
        "specializations": [],
        "tier": 1,
        "hardpoints": {
            "light": 0,
            "medium": 1,
            "heavy": 1
        },
        "image": "https://api.warrobots.com/storage/robot/18/regular_detail_picture-ca27fa9d307ac43e0fbc3b8a68987786.jpg",
        "icon": "https://api.warrobots.com/storage/robot/18/regular_preview_picture-ca27fa9d307ac43e0fbc3b8a68987786.jpg"
    },
    {
        "id": null,
        "name": "Stalker",
        "faction": "Yan-di Ventures",
        "specializations": [],
        "tier": 1,
        "hardpoints": {
            "light": 2,
            "medium": 0,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/26/regular_detail_picture-57e1f7a7c82412bc60ebfd36e45e5384.jpg",
        "icon": "https://api.warrobots.com/storage/robot/26/regular_preview_picture-57e1f7a7c82412bc60ebfd36e45e5384.jpg"
    },
    {
        "id": null,
        "name": "Galahad",
        "faction": "Defense and Security<br>Conglomerate",
        "specializations": [],
        "tier": 2,
        "hardpoints": {
            "light": 2,
            "medium": 1,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/20/regular_detail_picture-029e9d412bf8d4594e3474a96821b4c2.jpg",
        "icon": "https://api.warrobots.com/storage/robot/20/regular_preview_picture-029e9d412bf8d4594e3474a96821b4c2.jpg"
    },
    {
        "id": null,
        "name": "Natasha",
        "faction": "SpaceTech",
        "specializations": [],
        "tier": 2,
        "hardpoints": {
            "light": 2,
            "medium": 0,
            "heavy": 2
        },
        "image": "https://api.warrobots.com/storage/robot/25/regular_detail_picture-cc752e41676a6d36a1efeb3eb4955ade.jpg",
        "icon": "https://api.warrobots.com/storage/robot/25/regular_preview_picture-cc752e41676a6d36a1efeb3eb4955ade.jpg"
    },
    {
        "id": null,
        "name": "Butch",
        "faction": "Defense and Security<br>Conglomerate",
        "specializations": [],
        "tier": 2,
        "hardpoints": {
            "light": 0,
            "medium": 0,
            "heavy": 4
        },
        "image": "https://api.warrobots.com/storage/robot/2/regular_detail_picture-8e1cf9d07625ebefa811ed0b8ec82d5c.jpg",
        "icon": "https://api.warrobots.com/storage/robot/2/regular_preview_picture-8e1cf9d07625ebefa811ed0b8ec82d5c.jpg"
    },
    {
        "id": null,
        "name": "Doc",
        "faction": "Defense and Security<br>Conglomerate",
        "specializations": [],
        "tier": 2,
        "hardpoints": {
            "light": 0,
            "medium": 4,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/3/regular_detail_picture-312194e9cc52099959db7547b82c4729.jpg",
        "icon": "https://api.warrobots.com/storage/robot/3/regular_preview_picture-312194e9cc52099959db7547b82c4729.jpg"
    },
    {
        "id": null,
        "name": "Carnage",
        "faction": "Defense and Security<br>Conglomerate",
        "specializations": [],
        "tier": 2,
        "hardpoints": {
            "light": 0,
            "medium": 0,
            "heavy": 2
        },
        "image": "https://api.warrobots.com/storage/robot/27/regular_detail_picture-f595f6dc42f963f65a69fad8bceb677f.jpg",
        "icon": "https://api.warrobots.com/storage/robot/27/regular_preview_picture-f595f6dc42f963f65a69fad8bceb677f.jpg"
    },
    {
        "id": null,
        "name": "Rhino",
        "faction": "Defense and Security<br>Conglomerate",
        "specializations": [],
        "tier": 2,
        "hardpoints": {
            "light": 2,
            "medium": 2,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/28/regular_detail_picture-75a6172cffe70edbcb03296783113e07.jpg",
        "icon": "https://api.warrobots.com/storage/robot/28/regular_preview_picture-75a6172cffe70edbcb03296783113e07.jpg"
    },
    {
        "id": null,
        "name": "Leo",
        "faction": "Icarus Technologies",
        "specializations": [],
        "tier": 2,
        "hardpoints": {
            "light": 3,
            "medium": 0,
            "heavy": 1
        },
        "image": "https://api.warrobots.com/storage/robot/22/regular_detail_picture-621b4cf7606d97ea53da88c4c7357127.jpg",
        "icon": "https://api.warrobots.com/storage/robot/22/regular_preview_picture-621b4cf7606d97ea53da88c4c7357127.jpg"
    },
    {
        "id": null,
        "name": "Hover",
        "faction": "SpaceTech",
        "specializations": [],
        "tier": 2,
        "hardpoints": {
            "light": 1,
            "medium": 2,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/31/regular_detail_picture-72e65a8ce0d9e302ecc409f53bf06632.jpg",
        "icon": "https://api.warrobots.com/storage/robot/31/regular_preview_picture-3fd76e401c851f8dfe3201ea49c28d56.jpg"
    },
    {
        "id": null,
        "name": "Lancelot",
        "faction": "Defense and Security<br>Conglomerate",
        "specializations": [],
        "tier": 2,
        "hardpoints": {
            "light": 0,
            "medium": 2,
            "heavy": 1
        },
        "image": "https://api.warrobots.com/storage/robot/21/regular_detail_picture-834e6c8889d526c40ae5b49e87b35e90.jpg",
        "icon": "https://api.warrobots.com/storage/robot/21/regular_preview_picture-834e6c8889d526c40ae5b49e87b35e90.jpg"
    },
    {
        "id": null,
        "name": "Ao Qin",
        "faction": "SpaceTech",
        "specializations": [],
        "tier": 2,
        "hardpoints": {
            "light": 4,
            "medium": 0,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/48/regular_detail_picture-c794ee071d9d3ea672753121d30cec97.jpg",
        "icon": "https://api.warrobots.com/storage/robot/48/regular_preview_picture-c794ee071d9d3ea672753121d30cec97.jpg"
    },
    {
        "id": null,
        "name": "Kumiho",
        "faction": "Icarus Technologies",
        "specializations": [],
        "tier": 2,
        "hardpoints": {
            "light": 0,
            "medium": 2,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/5/regular_detail_picture-fa4ebb0ed7a85a45c5e73f8784f2e930.jpg",
        "icon": "https://api.warrobots.com/storage/robot/5/regular_preview_picture-fa4ebb0ed7a85a45c5e73f8784f2e930.jpg"
    },
    {
        "id": null,
        "name": "Griffin",
        "faction": "SpaceTech",
        "specializations": [],
        "tier": 2,
        "hardpoints": {
            "light": 2,
            "medium": 2,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/24/regular_detail_picture-09951131a641fbd8e7226004c625f879.jpg",
        "icon": "https://api.warrobots.com/storage/robot/24/regular_preview_picture-09951131a641fbd8e7226004c625f879.jpg"
    },
    {
        "id": null,
        "name": "Fujin",
        "faction": "Evolife",
        "specializations": [],
        "tier": 2,
        "hardpoints": {
            "light": 0,
            "medium": 3,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/29/regular_detail_picture-559152d482abe0e5247c6455a206f7a5.jpg",
        "icon": "https://api.warrobots.com/storage/robot/29/regular_preview_picture-559152d482abe0e5247c6455a206f7a5.jpg"
    },
    {
        "id": null,
        "name": "Raijin",
        "faction": "Evolife",
        "specializations": [],
        "tier": 2,
        "hardpoints": {
            "light": 0,
            "medium": 0,
            "heavy": 2
        },
        "image": "https://api.warrobots.com/storage/robot/30/regular_detail_picture-74e141c355d82e8613ab3a05d8fba2a6.jpg",
        "icon": "https://api.warrobots.com/storage/robot/30/regular_preview_picture-74e141c355d82e8613ab3a05d8fba2a6.jpg"
    },
    {
        "id": null,
        "name": "Fury",
        "faction": "Defense and Security<br>Conglomerate",
        "specializations": [
            "Damage Dealer"
        ],
        "tier": 3,
        "hardpoints": {
            "light": 0,
            "medium": 0,
            "heavy": 3
        },
        "image": "https://api.warrobots.com/storage/robot/23/regular_detail_picture-705d1f78d1da7d007d0954b8e01822bc.jpg",
        "icon": "https://api.warrobots.com/storage/robot/23/regular_preview_picture-705d1f78d1da7d007d0954b8e01822bc.jpg"
    },
    {
        "id": null,
        "name": "Strider",
        "faction": "Yan-di Ventures",
        "specializations": [
            "Saboteur"
        ],
        "tier": 3,
        "hardpoints": {
            "light": 2,
            "medium": 0,
            "heavy": 1
        },
        "image": "https://api.warrobots.com/storage/robot/32/regular_detail_picture-c2b4f31ad3c7590457c77411bbcfe2b3.jpg",
        "icon": "https://api.warrobots.com/storage/robot/32/regular_preview_picture-c2b4f31ad3c7590457c77411bbcfe2b3.jpg"
    },
    {
        "id": null,
        "name": "Raven",
        "faction": "SpaceTech",
        "specializations": [
            "Damage Dealer"
        ],
        "tier": 3,
        "hardpoints": {
            "light": 2,
            "medium": 2,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/37/regular_detail_picture-f13a0f08b974e4288ffbc45e2ba34c80.jpg",
        "icon": "https://api.warrobots.com/storage/robot/37/regular_preview_picture-f13a0f08b974e4288ffbc45e2ba34c80.jpg"
    },
    {
        "id": null,
        "name": "Rayker",
        "faction": "Defense and Security<br>Conglomerate",
        "specializations": [
            "Damage Dealer"
        ],
        "tier": 3,
        "hardpoints": {
            "light": 2,
            "medium": 0,
            "heavy": 1
        },
        "image": "https://api.warrobots.com/storage/robot/43/regular_detail_picture-6703a56bebdd6e71b18d7dbeaa2fae2d.jpg",
        "icon": "https://api.warrobots.com/storage/robot/43/regular_preview_picture-6703a56bebdd6e71b18d7dbeaa2fae2d.jpg"
    },
    {
        "id": null,
        "name": "Ao Guang",
        "faction": "SpaceTech",
        "specializations": [
            "Damage Dealer"
        ],
        "tier": 3,
        "hardpoints": {
            "light": 0,
            "medium": 3,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/49/regular_detail_picture-7a71329d7a0db2a44c537f775f33e550.jpg",
        "icon": "https://api.warrobots.com/storage/robot/49/regular_preview_picture-7a71329d7a0db2a44c537f775f33e550.jpg"
    },
    {
        "id": null,
        "name": "Bulgasari",
        "faction": "Icarus Technologies",
        "specializations": [
            ""
        ],
        "tier": 3,
        "hardpoints": {
            "light": 0,
            "medium": 3,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/15/regular_detail_picture-1a8d0aaa63f460da4e1d2a668b134a2a.jpg",
        "icon": "https://api.warrobots.com/storage/robot/15/regular_preview_picture-1a8d0aaa63f460da4e1d2a668b134a2a.jpg"
    },
    {
        "id": null,
        "name": "Hellburner",
        "faction": "Yan-di Ventures",
        "specializations": [],
        "tier": 3,
        "hardpoints": {
            "light": 1,
            "medium": 0,
            "heavy": 1
        },
        "image": "https://api.warrobots.com/storage/robot/34/regular_detail_picture-3c6873179bba60ccf4493d29d8056882.jpg",
        "icon": "https://api.warrobots.com/storage/robot/34/regular_preview_picture-3c6873179bba60ccf4493d29d8056882.jpg"
    },
    {
        "id": null,
        "name": "Cerberus",
        "faction": "Evolife",
        "specializations": [],
        "tier": 3,
        "hardpoints": {
            "light": 0,
            "medium": 2,
            "heavy": 1
        },
        "image": "https://api.warrobots.com/storage/robot/61/regular_detail_picture-ad1b239676a24a4f6204755935f3de7e.jpg",
        "icon": "https://api.warrobots.com/storage/robot/61/regular_preview_picture-ad1b239676a24a4f6204755935f3de7e.jpg"
    },
    {
        "id": null,
        "name": "Haechi",
        "faction": "Icarus Technologies",
        "specializations": [],
        "tier": 3,
        "hardpoints": {
            "light": 0,
            "medium": 3,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/14/regular_detail_picture-387782dd6473c2cad2a73fb24723b23b.jpg",
        "icon": "https://api.warrobots.com/storage/robot/14/regular_preview_picture-387782dd6473c2cad2a73fb24723b23b.jpg"
    },
    {
        "id": null,
        "name": "Inquisitor",
        "faction": "Yan-di Ventures",
        "specializations": [],
        "tier": 3,
        "hardpoints": {
            "light": 0,
            "medium": 2,
            "heavy": 1
        },
        "image": "https://api.warrobots.com/storage/robot/12/regular_detail_picture-58bd8e44c5994c22bdf35399e0f1c181.jpg",
        "icon": "https://api.warrobots.com/storage/robot/12/regular_preview_picture-58bd8e44c5994c22bdf35399e0f1c181.jpg"
    },
    {
        "id": null,
        "name": "Falcon",
        "faction": "Yan-di Ventures",
        "specializations": [],
        "tier": 3,
        "hardpoints": {
            "light": 0,
            "medium": 0,
            "heavy": 3
        },
        "image": "https://api.warrobots.com/storage/robot/39/regular_detail_picture-7635dfe821e40a542dc35d24c485f1d7.jpg",
        "icon": "https://api.warrobots.com/storage/robot/39/regular_preview_picture-7635dfe821e40a542dc35d24c485f1d7.jpg"
    },
    {
        "id": null,
        "name": "Pursuer",
        "faction": "Yan-di Ventures",
        "specializations": [],
        "tier": 3,
        "hardpoints": {
            "light": 3,
            "medium": 0,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/36/regular_detail_picture-ea2fb2871b1fda5a752e38eeefd313cb.jpg",
        "icon": "https://api.warrobots.com/storage/robot/36/regular_preview_picture-ea2fb2871b1fda5a752e38eeefd313cb.jpg"
    },
    {
        "id": null,
        "name": "Spectre",
        "faction": "Yan-di Ventures",
        "specializations": [],
        "tier": 3,
        "hardpoints": {
            "light": 0,
            "medium": 4,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/33/regular_detail_picture-dc5e5af8f7e037bfe7c393b464acd3ac.jpg",
        "icon": "https://api.warrobots.com/storage/robot/33/regular_preview_picture-dc5e5af8f7e037bfe7c393b464acd3ac.jpg"
    },
    {
        "id": null,
        "name": "Mercury",
        "faction": "Yan-di Ventures",
        "specializations": [],
        "tier": 3,
        "hardpoints": {
            "light": 2,
            "medium": 0,
            "heavy": 1
        },
        "image": "https://api.warrobots.com/storage/robot/35/regular_detail_picture-c08cb5b0541a8433dc244d33569530b9.jpg",
        "icon": "https://api.warrobots.com/storage/robot/35/regular_preview_picture-c08cb5b0541a8433dc244d33569530b9.jpg"
    },
    {
        "id": null,
        "name": "Nemesis",
        "faction": "Icarus Technologies",
        "specializations": [],
        "tier": 3,
        "hardpoints": {
            "light": 0,
            "medium": 2,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/47/regular_detail_picture-82ce47f19327efc775ccf3447e00db91.jpg",
        "icon": "https://api.warrobots.com/storage/robot/47/regular_preview_picture-82ce47f19327efc775ccf3447e00db91.jpg"
    },
    {
        "id": null,
        "name": "Weyland",
        "faction": "Evolife",
        "specializations": [],
        "tier": 3,
        "hardpoints": {
            "light": 0,
            "medium": 0,
            "heavy": 2
        },
        "image": "https://api.warrobots.com/storage/robot/41/regular_detail_picture-80b4460f9f0a7c87180b4d8f2342c403.jpg",
        "icon": "https://api.warrobots.com/storage/robot/41/regular_preview_picture-80b4460f9f0a7c87180b4d8f2342c403.jpg"
    },
    {
        "id": null,
        "name": "Behemoth",
        "faction": "Defense and Security<br>Conglomerate",
        "specializations": [],
        "tier": 3,
        "hardpoints": {
            "light": 0,
            "medium": 0,
            "heavy": 4
        },
        "image": "https://api.warrobots.com/storage/robot/55/regular_detail_picture-d42bba0f14bd9837c3c8bd08e0857224.jpg",
        "icon": "https://api.warrobots.com/storage/robot/55/regular_preview_picture-d42bba0f14bd9837c3c8bd08e0857224.jpg"
    },
    {
        "id": null,
        "name": "Bulwark",
        "faction": "Defense and Security<br>Conglomerate",
        "specializations": [],
        "tier": 3,
        "hardpoints": {
            "light": 0,
            "medium": 0,
            "heavy": 2
        },
        "image": "https://api.warrobots.com/storage/robot/38/regular_detail_picture-744b3bda0fbfe99e760b5b60fd007c3c.jpg",
        "icon": "https://api.warrobots.com/storage/robot/38/regular_preview_picture-f5e4d1af8561f80950949df705e1ed48.png"
    },
    {
        "id": null,
        "name": "Invader",
        "faction": "Defense and Security<br>Conglomerate",
        "specializations": [],
        "tier": 3,
        "hardpoints": {
            "light": 2,
            "medium": 1,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/44/regular_detail_picture-052d2c373b4f964da1dc89d957b36229.jpg",
        "icon": "https://api.warrobots.com/storage/robot/44/regular_preview_picture-052d2c373b4f964da1dc89d957b36229.jpg"
    },
    {
        "id": null,
        "name": "Mender",
        "faction": "Evolife",
        "specializations": [],
        "tier": 3,
        "hardpoints": {
            "light": 2,
            "medium": 1,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/40/regular_detail_picture-fc751436a193858243bfaa4b75432d91.jpg",
        "icon": "https://api.warrobots.com/storage/robot/40/regular_preview_picture-fc751436a193858243bfaa4b75432d91.jpg"
    },
    {
        "id": null,
        "name": "Blitz",
        "faction": "Defense and Security<br>Conglomerate",
        "specializations": [],
        "tier": 3,
        "hardpoints": {
            "light": 4,
            "medium": 0,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/42/regular_detail_picture-1b2af237d460d09bf4e7ff42b9321084.jpg",
        "icon": "https://api.warrobots.com/storage/robot/42/regular_preview_picture-1b2af237d460d09bf4e7ff42b9321084.jpg"
    },
    {
        "id": null,
        "name": "Fenrir",
        "faction": "Evolife",
        "specializations": [],
        "tier": 3,
        "hardpoints": {
            "light": 0,
            "medium": 2,
            "heavy": 1
        },
        "image": "https://api.warrobots.com/storage/robot/54/regular_detail_picture-128aa2a01210a3a74ee2fcd76403655d.jpg",
        "icon": "https://api.warrobots.com/storage/robot/54/regular_preview_picture-128aa2a01210a3a74ee2fcd76403655d.jpg"
    },
    {
        "id": null,
        "name": "Hades",
        "faction": "Icarus Technologies",
        "specializations": [],
        "tier": 3,
        "hardpoints": {
            "light": 2,
            "medium": 0,
            "heavy": 1
        },
        "image": "https://api.warrobots.com/storage/robot/46/regular_detail_picture-d7eecf8d94015610e8488cebfe8a01c6.jpg",
        "icon": "https://api.warrobots.com/storage/robot/46/regular_preview_picture-d7eecf8d94015610e8488cebfe8a01c6.jpg"
    },
    {
        "id": null,
        "name": "Loki",
        "faction": "Evolife",
        "specializations": [],
        "tier": 3,
        "hardpoints": {
            "light": 3,
            "medium": 0,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/52/regular_detail_picture-939a66a5cea872a165b1c49607e0ee9c.jpg",
        "icon": "https://api.warrobots.com/storage/robot/52/regular_preview_picture-939a66a5cea872a165b1c49607e0ee9c.jpg"
    },
    {
        "id": null,
        "name": "Tyr",
        "faction": "Evolife",
        "specializations": [],
        "tier": 3,
        "hardpoints": {
            "light": 2,
            "medium": 2,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/53/regular_detail_picture-7baa2777121dbeb359a7af7d17820178.jpg",
        "icon": "https://api.warrobots.com/storage/robot/53/regular_preview_picture-7baa2777121dbeb359a7af7d17820178.jpg"
    },
    {
        "id": null,
        "name": "Ao Jun",
        "faction": "SpaceTech",
        "specializations": [],
        "tier": 3,
        "hardpoints": {
            "light": 0,
            "medium": 0,
            "heavy": 2
        },
        "image": "https://api.warrobots.com/storage/robot/50/regular_detail_picture-4612effe8da6b392073eba1b22a342ac.jpg",
        "icon": "https://api.warrobots.com/storage/robot/50/regular_preview_picture-4612effe8da6b392073eba1b22a342ac.jpg"
    },
    {
        "id": null,
        "name": "Ares",
        "faction": "Icarus Technologies",
        "specializations": [],
        "tier": 3,
        "hardpoints": {
            "light": 2,
            "medium": 2,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/45/regular_detail_picture-96fd8a1c520b53b339df2f5ffb7d10e9.jpg",
        "icon": "https://api.warrobots.com/storage/robot/45/regular_preview_picture-96fd8a1c520b53b339df2f5ffb7d10e9.jpg"
    },
    {
        "id": null,
        "name": "Leech",
        "faction": "Evolife",
        "specializations": [],
        "tier": 3,
        "hardpoints": {
            "light": 0,
            "medium": 4,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/57/regular_detail_picture-ae8680ec0217f254e41519d7c7fb7e73.png",
        "icon": "https://api.warrobots.com/storage/robot/57/regular_preview_picture-ae8680ec0217f254e41519d7c7fb7e73.png"
    },
    {
        "id": null,
        "name": "Phantom",
        "faction": "Icarus Technologies",
        "specializations": [],
        "tier": 3,
        "hardpoints": {
            "light": 2,
            "medium": 1,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/56/regular_detail_picture-a344fa889ddc0fdf2fc019e556d4a4e4.jpg",
        "icon": "https://api.warrobots.com/storage/robot/56/regular_preview_picture-a344fa889ddc0fdf2fc019e556d4a4e4.jpg"
    },
    {
        "id": null,
        "name": "Harpy",
        "faction": "Defense and Security<br>Conglomerate",
        "specializations": [],
        "tier": 4,
        "hardpoints": {
            "light": 0,
            "medium": 2,
            "heavy": 1
        },
        "image": "https://api.warrobots.com/storage/robot/79/regular_detail_picture-99985f3eefd1785fa089fe3e5d7613cb.jpg",
        "icon": "https://api.warrobots.com/storage/robot/79/regular_preview_picture-f3e83c7ccba4563e7a44e86542c7e344.jpg"
    },
    {
        "id": null,
        "name": "Siren",
        "faction": "Defense and Security<br>Conglomerate",
        "specializations": [],
        "tier": 4,
        "hardpoints": {
            "light": 1,
            "medium": 0,
            "heavy": 2
        },
        "image": "https://api.warrobots.com/storage/robot/80/regular_detail_picture-7fee01c11075185e2f5bf733a71a71e7.jpg",
        "icon": "https://api.warrobots.com/storage/robot/80/regular_preview_picture-4d94f55144eaa5a704e9a2ccbe527b10.jpg"
    },
    {
        "id": null,
        "name": "Typhon",
        "faction": "Evolife",
        "specializations": [],
        "tier": 4,
        "hardpoints": {
            "light": 0,
            "medium": 4,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/69/regular_detail_picture-2b20220021dee2d763125194edc54f6f.jpg",
        "icon": "https://api.warrobots.com/storage/robot/69/regular_preview_picture-2b20220021dee2d763125194edc54f6f.jpg"
    },
    {
        "id": null,
        "name": "Orochi",
        "faction": "SpaceTech",
        "specializations": [],
        "tier": 4,
        "hardpoints": {
            "light": 0,
            "medium": 0,
            "heavy": 2
        },
        "image": "https://api.warrobots.com/storage/robot/72/regular_detail_picture-701953976082a65e90b40b00aba92e11.jpg",
        "icon": "https://api.warrobots.com/storage/robot/72/regular_preview_picture-701953976082a65e90b40b00aba92e11.jpg"
    },
    {
        "id": null,
        "name": "Demeter",
        "faction": "Icarus Technologies",
        "specializations": [],
        "tier": 4,
        "hardpoints": {
            "light": 0,
            "medium": 3,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/71/regular_detail_picture-da9cb942f6f02da88fe925962efde25e.jpg",
        "icon": "https://api.warrobots.com/storage/robot/71/regular_preview_picture-da9cb942f6f02da88fe925962efde25e.jpg"
    },
    {
        "id": null,
        "name": "Jaeger",
        "faction": "Evolife",
        "specializations": [],
        "tier": 4,
        "hardpoints": {
            "light": 0,
            "medium": 0,
            "heavy": 2
        },
        "image": "https://api.warrobots.com/storage/robot/67/regular_detail_picture-10489e2bd33ace15b9a2de10a2b4e37b.jpg",
        "icon": "https://api.warrobots.com/storage/robot/67/regular_preview_picture-10489e2bd33ace15b9a2de10a2b4e37b.jpg"
    },
    {
        "id": null,
        "name": "Scorpion",
        "faction": "Yan-di Ventures",
        "specializations": [],
        "tier": 4,
        "hardpoints": {
            "light": 1,
            "medium": 2,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/65/regular_detail_picture-6fc67681982e19d74c4e1282257cc65e.jpg",
        "icon": "https://api.warrobots.com/storage/robot/65/regular_preview_picture-6fc67681982e19d74c4e1282257cc65e.jpg"
    },
    {
        "id": null,
        "name": "Erebus",
        "faction": "Evolife",
        "specializations": [],
        "tier": 4,
        "hardpoints": {
            "light": 0,
            "medium": 0,
            "heavy": 3
        },
        "image": "https://api.warrobots.com/storage/robot/77/regular_detail_picture-c8d48a4ea098c973e1e9874bf7030187.jpg",
        "icon": "https://api.warrobots.com/storage/robot/77/regular_preview_picture-4bfc40cde6e2c8c47632e2c8be9c1fa8.jpg"
    },
    {
        "id": null,
        "name": "Fafnir",
        "faction": "Evolife",
        "specializations": [],
        "tier": 4,
        "hardpoints": {
            "light": 0,
            "medium": 4,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/74/regular_detail_picture-1eb0a9cf7fbcd0455d995e44fa028af7.jpg",
        "icon": "https://api.warrobots.com/storage/robot/74/regular_preview_picture-1eb0a9cf7fbcd0455d995e44fa028af7.jpg"
    },
    {
        "id": null,
        "name": "Hawk",
        "faction": "SpaceTech",
        "specializations": [],
        "tier": 4,
        "hardpoints": {
            "light": 2,
            "medium": 0,
            "heavy": 2
        },
        "image": "https://api.warrobots.com/storage/robot/66/regular_detail_picture-4e041a321c8907300ee77e8ca9880154.jpg",
        "icon": "https://api.warrobots.com/storage/robot/66/regular_preview_picture-4e041a321c8907300ee77e8ca9880154.jpg"
    },
    {
        "id": null,
        "name": "Nightingale",
        "faction": "Defense and Security<br>Conglomerate",
        "specializations": [],
        "tier": 4,
        "hardpoints": {
            "light": 1,
            "medium": 2,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/62/regular_detail_picture-279c8da1f7423585a83c127c813bd691.jpg",
        "icon": "https://api.warrobots.com/storage/robot/62/regular_preview_picture-279c8da1f7423585a83c127c813bd691.jpg"
    },
    {
        "id": null,
        "name": "Ravana",
        "faction": "Yan-di Ventures",
        "specializations": [],
        "tier": 4,
        "hardpoints": {
            "light": 0,
            "medium": 3,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/63/regular_detail_picture-f47edda7429e5d1453906fe955f1647c.jpg",
        "icon": "https://api.warrobots.com/storage/robot/63/regular_preview_picture-f47edda7429e5d1453906fe955f1647c.jpg"
    },
    {
        "id": null,
        "name": "Shell",
        "faction": "Defense and Security<br>Conglomerate",
        "specializations": [],
        "tier": 4,
        "hardpoints": {
            "light": 2,
            "medium": 0,
            "heavy": 1
        },
        "image": "https://api.warrobots.com/storage/robot/70/regular_detail_picture-e40e27939ec61e73e78eba13ff0b5446.jpg",
        "icon": "https://api.warrobots.com/storage/robot/70/regular_preview_picture-e40e27939ec61e73e78eba13ff0b5446.jpg"
    },
    {
        "id": null,
        "name": "Khepri",
        "faction": "Yan-di Ventures",
        "specializations": [],
        "tier": 4,
        "hardpoints": {
            "light": 4,
            "medium": 0,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/81/regular_detail_picture-2bbc828bd683ea8b70154a46c52050e2.jpg",
        "icon": "https://api.warrobots.com/storage/robot/81/regular_preview_picture-ed53600d957a8c333f4519e15261d434.jpg"
    },
    {
        "id": null,
        "name": "Revenant",
        "faction": "Icarus Technologies",
        "specializations": [],
        "tier": 4,
        "hardpoints": {
            "light": 2,
            "medium": 0,
            "heavy": 1
        },
        "image": "https://api.warrobots.com/storage/robot/76/regular_detail_picture-4febda985cc775c4c16868dabbce6635.jpg",
        "icon": "https://api.warrobots.com/storage/robot/76/regular_preview_picture-7a1fba872f92d20cbfe15069fa18c36a.jpg"
    },
    {
        "id": null,
        "name": "Skyros",
        "faction": "Icarus Technologies",
        "specializations": [],
        "tier": 4,
        "hardpoints": {
            "light": 1,
            "medium": 1,
            "heavy": 1
        },
        "image": "https://api.warrobots.com/storage/robot/83/regular_detail_picture-f18c598e244fdc5b6ff994ae9ba16753.jpg",
        "icon": "https://api.warrobots.com/storage/robot/83/regular_preview_picture-f18c598e244fdc5b6ff994ae9ba16753.jpg"
    },
    {
        "id": null,
        "name": "Seraph",
        "faction": "SpaceTech",
        "specializations": [],
        "tier": 4,
        "hardpoints": {
            "light": 0,
            "medium": 0,
            "heavy": 2
        },
        "image": "https://api.warrobots.com/storage/robot/84/regular_detail_picture-2eb5932ce20f836668c4235f800a633a.jpg",
        "icon": "https://api.warrobots.com/storage/robot/84/regular_preview_picture-2eb5932ce20f836668c4235f800a633a.jpg"
    },
    {
        "id": null,
        "name": "Mars",
        "faction": "Defense and Security<br>Conglomerate",
        "specializations": [],
        "tier": 4,
        "hardpoints": {
            "light": 0,
            "medium": 3,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/86/regular_detail_picture-514639f7ec3fc5fe4c5d816dd4ba3e09.jpg",
        "icon": "https://api.warrobots.com/storage/robot/86/regular_preview_picture-514639f7ec3fc5fe4c5d816dd4ba3e09.jpg"
    },
    {
        "id": null,
        "name": "Angler",
        "faction": "Evolife",
        "specializations": [],
        "tier": 4,
        "hardpoints": {
            "light": 3,
            "medium": 0,
            "heavy": 1
        },
        "image": "https://api.warrobots.com/storage/robot/87/regular_detail_picture-d131ff92e367e7b8352c126bf451bd44.jpg",
        "icon": "https://api.warrobots.com/storage/robot/87/regular_preview_picture-1a19fcd21ccdbce010f5b7e65119c2ff.jpg"
    },
    {
        "id": null,
        "name": "Nether",
        "faction": "SpaceTech",
        "specializations": [],
        "tier": 4,
        "hardpoints": {
            "light": 4,
            "medium": 0,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/88/regular_detail_picture-0d576d8a62e583da3ae37b0dbdcb64ec.jpg",
        "icon": "https://api.warrobots.com/storage/robot/88/regular_preview_picture-c3ff6ff86b3debed121a464f956b5768.jpg"
    },
    {
        "id": null,
        "name": "Imugi",
        "faction": "Icarus Technologies",
        "specializations": [],
        "tier": 4,
        "hardpoints": {
            "light": 1,
            "medium": 2,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/90/regular_detail_picture-f9d08bfdc3ae6048869170e6585cc938.jpg",
        "icon": "https://api.warrobots.com/storage/robot/90/regular_preview_picture-f9d08bfdc3ae6048869170e6585cc938.jpg"
    },
    {
        "id": null,
        "name": "Lynx",
        "faction": "Yan-di Ventures",
        "specializations": [],
        "tier": 4,
        "hardpoints": {
            "light": 0,
            "medium": 0,
            "heavy": 2
        },
        "image": "https://api.warrobots.com/storage/robot/92/regular_detail_picture-8b14cbfad30a7ab3de2fccc73164395b.png",
        "icon": "https://api.warrobots.com/storage/robot/92/regular_preview_picture-8b14cbfad30a7ab3de2fccc73164395b.png"
    },
    {
        "id": null,
        "name": "Crisis",
        "faction": "Icarus Technologies",
        "specializations": [],
        "tier": 4,
        "hardpoints": {
            "light": 0,
            "medium": 0,
            "heavy": 4
        },
        "image": "https://api.warrobots.com/storage/robot/93/regular_detail_picture-988c123a9001fe38cd0482110708694c.png",
        "icon": "https://api.warrobots.com/storage/robot/93/regular_preview_picture-398529893bcc744e07a347b3122705c3.jpg"
    },
    {
        "id": null,
        "name": "Ophion",
        "faction": "Yan-di Ventures",
        "specializations": [],
        "tier": 4,
        "hardpoints": {
            "light": 0,
            "medium": 3,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/95/regular_detail_picture-c1ef7ae4846f2f688b81db73b3e0c10e.jpg",
        "icon": "https://api.warrobots.com/storage/robot/95/regular_preview_picture-3a47c4a10f323ffa8cd3f3f19790c223.png"
    },
    {
        "id": null,
        "name": "Ochokochi",
        "faction": "Icarus Technologies",
        "specializations": [],
        "tier": 4,
        "hardpoints": {
            "light": 2,
            "medium": 2,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/97/regular_detail_picture-219067f218851b8b9e2cfddd85ef66e6.jpg",
        "icon": "https://api.warrobots.com/storage/robot/97/regular_preview_picture-ad3c1cd025fd4b5ecff03cd0386fcb9e.jpg"
    },
    {
        "id": null,
        "name": "Dagon",
        "faction": "Evolife",
        "specializations": [],
        "tier": 4,
        "hardpoints": {
            "light": 6,
            "medium": 0,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/98/regular_detail_picture-f33c42e8ccb90908bc2c21e337b72248.jpg",
        "icon": "https://api.warrobots.com/storage/robot/98/regular_preview_picture-f33c42e8ccb90908bc2c21e337b72248.jpg"
    },
    {
        "id": null,
        "name": "Curie",
        "faction": "Icarus Technologies",
        "specializations": [],
        "tier": 4,
        "hardpoints": {
            "light": 0,
            "medium": 0,
            "heavy": 2
        },
        "image": "https://api.warrobots.com/storage/robot/99/regular_detail_picture-e4d27cd25b84549ceba9919ec8d84595.jpg",
        "icon": "https://api.warrobots.com/storage/robot/99/regular_preview_picture-adc85ecf7826898dfb37a40b2b3121f7.jpg"
    },
    {
        "id": null,
        "name": "Shenlou",
        "faction": "Yan-di Ventures",
        "specializations": [],
        "tier": 4,
        "hardpoints": {
            "light": 0,
            "medium": 2,
            "heavy": 1
        },
        "image": "https://api.warrobots.com/storage/robot/101/regular_detail_picture-6158634da712b6da543b20d8a542c848.jpg",
        "icon": "https://api.warrobots.com/storage/robot/101/regular_preview_picture-1c32642eacd0c4c51a8e7fdc575e5a94.jpg"
    },
    {
        "id": null,
        "name": "Pathfinder",
        "faction": "Evolife",
        "specializations": [],
        "tier": 4,
        "hardpoints": {
            "light": 0,
            "medium": 3,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/103/regular_detail_picture-49060aa8279db4250c43cc9ef36bae30.jpg",
        "icon": "https://api.warrobots.com/storage/robot/103/regular_preview_picture-fd070044044c582c9aa395c9a105f961.png"
    },
    {
        "id": null,
        "name": "Raptor",
        "faction": "SpaceTech",
        "specializations": [],
        "tier": 4,
        "hardpoints": {
            "light": 2,
            "medium": 0,
            "heavy": 1
        },
        "image": "https://api.warrobots.com/storage/robot/104/regular_detail_picture-d8d6c4c453bc1f31a93a5039dc149cf9.jpg",
        "icon": "https://api.warrobots.com/storage/robot/104/regular_preview_picture-d8d6c4c453bc1f31a93a5039dc149cf9.jpg"
    },
    {
        "id": null,
        "name": "Bagliore",
        "faction": "Yan-di Ventures",
        "specializations": [],
        "tier": 4,
        "hardpoints": {
            "light": 0,
            "medium": 0,
            "heavy": 4
        },
        "image": "https://api.warrobots.com/storage/robot/106/regular_detail_picture-4700e4ab72715a91901df90a84bbc347.jpg",
        "icon": "https://api.warrobots.com/storage/robot/106/regular_preview_picture-a2f86ce2f210a5ff3588a390d55b8648.jpg"
    },
    {
        "id": null,
        "name": "Condor",
        "faction": "Evolife",
        "specializations": [],
        "tier": 4,
        "hardpoints": {
            "light": 2,
            "medium": 0,
            "heavy": 1
        },
        "image": "https://api.warrobots.com/storage/robot/108/regular_detail_picture-304fe7bfacc9a1e6b61bab097c9edec5.jpg",
        "icon": "https://api.warrobots.com/storage/robot/108/regular_preview_picture-304fe7bfacc9a1e6b61bab097c9edec5.jpg"
    },
    {
        "id": null,
        "name": "Dux",
        "faction": "SpaceTech",
        "specializations": [],
        "tier": 4,
        "hardpoints": {
            "light": 1,
            "medium": 2,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/109/regular_detail_picture-47738d122b05dfb715798010c8c8d884.jpg",
        "icon": "https://api.warrobots.com/storage/robot/109/regular_preview_picture-336992cdf0e01ead0b706c5f8c8b1757.jpg"
    },
    {
        "id": null,
        "name": "Ravager",
        "faction": "Defense and Security<br>Conglomerate",
        "specializations": [],
        "tier": 4,
        "hardpoints": {
            "light": 0,
            "medium": 5,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/111/regular_detail_picture-6fee8b96064143ffaee2e45a391279e6.jpg",
        "icon": "https://api.warrobots.com/storage/robot/111/regular_preview_picture-ea1f2af145b47dd6a6ce033c76828b14.jpg"
    },
    {
        "id": null,
        "name": "Samjok",
        "faction": "Icarus Technologies",
        "specializations": [],
        "tier": 4,
        "hardpoints": {
            "light": 1,
            "medium": 0,
            "heavy": 2
        },
        "image": "https://api.warrobots.com/storage/robot/112/regular_detail_picture-33e4d1c442fa24a4cdd5d8ca338ad440.jpg",
        "icon": "https://api.warrobots.com/storage/robot/112/regular_preview_picture-606036273c25a87896b1c5ac4065326c.jpg"
    },
    {
        "id": null,
        "name": "Lio",
        "faction": "SpaceTech",
        "specializations": [],
        "tier": 4,
        "hardpoints": {
            "light": 0,
            "medium": 3,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/114/regular_detail_picture-27669dc45db6003e9c621e586916f15c.jpg",
        "icon": "https://api.warrobots.com/storage/robot/114/regular_preview_picture-a426239bd2a0a716a09fa4a3bb5382bb.png"
    },
    {
        "id": null,
        "name": "Nuo",
        "faction": "SpaceTech",
        "specializations": [],
        "tier": 4,
        "hardpoints": {
            "light": 0,
            "medium": 2,
            "heavy": 1
        },
        "image": "https://api.warrobots.com/storage/robot/115/regular_detail_picture-bd67bdced34726879213d676c5334323.jpg",
        "icon": "https://api.warrobots.com/storage/robot/115/regular_preview_picture-a1abdccbf193d9cf0103d83f23e9264d.png"
    },
    {
        "id": null,
        "name": "SWORD Unit-190",
        "faction": "Defense and Security<br>Conglomerate",
        "specializations": [],
        "tier": 4,
        "hardpoints": {
            "light": 2,
            "medium": 2,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/116/regular_detail_picture-dd82254efe3eb2fa693c7dceb6439ddb.jpg",
        "icon": "https://api.warrobots.com/storage/robot/116/regular_preview_picture-8b58f609151a2448d81afb757f1ad8d6.jpg"
    },
    {
        "id": null,
        "name": "Teth",
        "faction": "Yan-di Ventures",
        "specializations": [
            "Brawler"
        ],
        "tier": 4,
        "hardpoints": {
            "light": 2,
            "medium": 1,
            "heavy": 1
        },
        "image": "https://api.warrobots.com/storage/robot/117/regular_detail_picture-fdcaede1b8e320710addf4bea5a5e125.jpg",
        "icon": "https://api.warrobots.com/storage/robot/117/regular_preview_picture-652dd1d347c289301bbd1f3b23460c21.jpg"
    },
    {
        "id": null,
        "name": "Stryx",
        "faction": "Evolife",
        "specializations": [
            "Damage Dealer"
        ],
        "tier": 4,
        "hardpoints": {
            "light": 0,
            "medium": 0,
            "heavy": 5
        },
        "image": "https://api.warrobots.com/storage/robot/118/regular_detail_picture-7f7e782aa4af2a5d9254ef3c024669fd.jpg",
        "icon": "https://api.warrobots.com/storage/robot/118/regular_preview_picture-8053f1f23c4052171bc3ef6d3d226ddf.png"
    },
    {
        "id": null,
        "name": "Kaji",
        "faction": "Icarus Technologies",
        "specializations": [
            "Damage Dealer"
        ],
        "tier": 4,
        "hardpoints": {
            "light": 1,
            "medium": 1,
            "heavy": 1
        },
        "image": "https://api.warrobots.com/storage/robot/120/regular_detail_picture-a0b1f3f293014de7c9af4e3e3258656d.jpg",
        "icon": "https://api.warrobots.com/storage/robot/120/regular_preview_picture-36d7220d37f151abbea05373a287f3e4.jpg"
    },
    {
        "id": null,
        "name": "Rex",
        "faction": "SpaceTech",
        "specializations": [
            "Brawler",
            "Saboteur"
        ],
        "tier": 4,
        "hardpoints": {
            "light": 2,
            "medium": 2,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/121/regular_detail_picture-394920caea4af8ea14ddd699eb929d0f.jpg",
        "icon": "https://api.warrobots.com/storage/robot/121/regular_preview_picture-e035fa02b06a22eccafe19e3f38fdc8d.jpg"
    },
    {
        "id": null,
        "name": "Hastatus",
        "faction": "Defense and Security<br>Conglomerate",
        "specializations": [
            "Damage Dealer"
        ],
        "tier": 4,
        "hardpoints": {
            "light": 2,
            "medium": 0,
            "heavy": 1
        },
        "image": "https://api.warrobots.com/storage/robot/122/regular_detail_picture-5e2fd1b6498fbb598f35718fa450572a.jpg",
        "icon": "https://api.warrobots.com/storage/robot/122/regular_preview_picture-ab276878c6436090843dc4d8c9c69376.jpg"
    },
    {
        "id": null,
        "name": "Ammit",
        "faction": "Yan-di Ventures",
        "specializations": [
            "Tank"
        ],
        "tier": 4,
        "hardpoints": {
            "light": 3,
            "medium": 1,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/robot/124/regular_detail_picture-4f14466fd2f5059b5477bc9aad83c346.jpg",
        "icon": "https://api.warrobots.com/storage/robot/124/regular_preview_picture-328d5a0dcb3fac34b3f78099cdc1eb9a.jpg"
    },
    {
        "id": null,
        "name": "Anaksor",
        "faction": "Icarus Technologies",
        "specializations": [
            "Raider"
        ],
        "tier": 4,
        "hardpoints": {
            "light": 0,
            "medium": 2,
            "heavy": 1
        },
        "image": "https://api.warrobots.com/storage/robot/125/regular_detail_picture-6a9a1189e24d03661dd3469ad25a9e46.jpg",
        "icon": "https://api.warrobots.com/storage/robot/125/regular_preview_picture-87c3e7e53bb61a1bd248b0ae7fc37d10.jpg"
    },
    {
        "id": null,
        "name": "Vector",
        "faction": "SpaceTech",
        "specializations": [
            "Brawler"
        ],
        "tier": 4,
        "hardpoints": {
            "light": 2,
            "medium": 2,
            "heavy": 0
        },
        "image": "https://api.warrobots.com/storage/content/pictures/1381/content_news_bckg_120_Vector_Teaser.jpg",
        "icon": "https://cdn.discordapp.com/attachments/944944493671641098/1497316733453861105/vector.png"
    }
];


const MAX_GUESSES = 6;
let target = null;
let guesses = [];
let gameOver = false;
let acIndex = -1;

// Cache DOM elements
const dom = {
    input: document.getElementById('robot-input'),
    autocomplete: document.getElementById('autocomplete'),
    guessBtn: document.getElementById('guess-btn'),
    newGameBtn: document.getElementById('new-game-btn'),
    dots: document.getElementById('dots'),
    rows: document.getElementById('guess-rows'),
    banner: document.getElementById('result-banner')
};

function pickTarget() {
    const valid = ROBOTS.filter(r => r.faction);
    target = valid[Math.floor(Math.random() * valid.length)];
}

function initDots() {
    dom.dots.innerHTML = '';
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < MAX_GUESSES; i++) {
        const d = document.createElement('div');
        d.className = 'dot';
        d.id = `dot-${i}`;
        fragment.appendChild(d);
    }
    dom.dots.appendChild(fragment);
}

function newGame() {
    guesses = [];
    gameOver = false;
    pickTarget();
    initDots();
    dom.rows.innerHTML = '';
    dom.input.value = '';
    dom.autocomplete.innerHTML = '';
    dom.banner.className = '';
    dom.banner.style.display = 'none';
    dom.banner.innerHTML = '';
    dom.banner.style.backgroundImage = 'none';
    dom.guessBtn.disabled = false;
    dom.input.disabled = false;
    dom.input.focus();
}

function getFilteredRobots(query) {
    const q = query.toLowerCase().trim();
    if (!q) return [];
    return ROBOTS.filter(r => r.name.toLowerCase().includes(q));
}

function renderAutocomplete(query) {
    const matches = getFilteredRobots(query);
    if (!matches.length || !query) {
        dom.autocomplete.innerHTML = '';
        return;
    }

    dom.autocomplete.innerHTML = matches.map((r) => {
        const used = guesses.some(g => g.name === r.name);
        return `<div class="ac-item${used ? ' used' : ''}" data-name="${r.name}">${r.name}${used ? ' ✓' : ''}</div>`;
    }).join('');

    dom.autocomplete.querySelectorAll('.ac-item:not(.used)').forEach(item => {
        item.addEventListener('mousedown', (e) => {
            e.preventDefault();
            dom.input.value = item.dataset.name;
            dom.autocomplete.innerHTML = '';
        });
    });
    acIndex = -1;
}

function makeGuess() {
    if (gameOver) return;
    const name = dom.input.value.trim();
    const robot = ROBOTS.find(r => r.name.toLowerCase() === name.toLowerCase());

    if (!robot || guesses.some(g => g.name === robot.name)) return;

    guesses.push(robot);
    renderRow(robot, guesses.length - 1);
    dom.input.value = '';
    dom.autocomplete.innerHTML = '';

    const dot = document.getElementById(`dot-${guesses.length - 1}`);
    if (robot.name === target.name) {
        if (dot) dot.className = 'dot win';
        showResult(true);
    } else {
        if (dot) dot.className = 'dot used';
        if (guesses.length >= MAX_GUESSES) showResult(false);
    }
}

function factionIconHTML(factionName) {
    const url = FACTION_ICONS[factionName];
    const fallback = FACTION_ICONS['_default'];
    if (url) {
        return `<img class="faction-icon" src="${url}" alt="${factionName}" 
      onerror="this.outerHTML='<span class=\\'faction-icon-placeholder\\'>${fallback}</span>'">`;
    }
    return `<span class="faction-icon-placeholder">${fallback}</span>`;
}

function renderRow(robot) {
    const row = document.createElement('div');
    row.className = 'guess-row';

    const checks = [
        { type: 'name', value: robot.name, correct: robot.name === target.name },
        { type: 'tier', value: robot.tier, correct: robot.tier === target.tier },
        { type: 'faction', value: robot.faction, correct: robot.faction === target.faction },
        { type: 'light', value: robot.hardpoints.light, correct: robot.hardpoints.light === target.hardpoints.light },
        { type: 'medium', value: robot.hardpoints.medium, correct: robot.hardpoints.medium === target.hardpoints.medium },
        { type: 'heavy', value: robot.hardpoints.heavy, correct: robot.hardpoints.heavy === target.hardpoints.heavy }
    ];

    checks.forEach(check => {
        const cell = document.createElement('div');
        cell.className = `cell ${check.type}-cell ${check.correct ? 'correct' : 'wrong'}`;

        if (check.type === 'name') {
            if (robot.icon) {
                cell.innerHTML = `
          <img src="${robot.icon}" alt="${robot.name}" class="robot-icon" onerror="this.style.display='none'"> <span>${robot.name}</span>`;
                cell.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url('${robot.icon}')`;
                cell.style.backgroundSize = 'cover';
                cell.style.backgroundPosition = 'center';
                cell.style.backgroundBlendMode = 'multiply';
            } else {
                cell.innerHTML = `<div class="robot-placeholder">🤖</div> <span>${robot.name}</span>`;
            }
        } else if (check.type === 'faction') {
            cell.innerHTML = `${factionIconHTML(robot.faction)}<span>${robot.faction || '—'}</span>`;
        } else if (check.type === 'tier') {
            const hint = !check.correct ? (robot.tier > target.tier ? ' ▼' : ' ▲') : '';
            cell.innerHTML = `<span>T${check.value}${hint}</span>`;
        } else {
            cell.textContent = check.value;
        }
        row.appendChild(cell);
    });

    dom.rows.prepend(row);
}

function showResult(won) {
    gameOver = true;
    dom.guessBtn.disabled = true;
    dom.input.disabled = true;

    dom.banner.className = won ? 'win' : 'lose';

    if (target.image) {
        Object.assign(dom.banner.style, {
            backgroundImage: `linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url('${target.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundBlendMode: 'overlay'
        });
    }

    dom.banner.innerHTML = `
    <div class="result-label">${won ? 'Correct!' : 'Game Over'}</div>
    <div class="answer-name">${target.name}</div>
    <div class="sub">${won ? `Identified in ${guesses.length} / ${MAX_GUESSES} attempts` : `${target.faction} · L${target.hardpoints.light} M${target.hardpoints.medium} H${target.hardpoints.heavy}`}</div>
  `;

    dom.banner.style.display = 'flex';
    dom.banner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

dom.input.addEventListener('input', (e) => renderAutocomplete(e.target.value));

dom.input.addEventListener('keydown', (e) => {
    const items = dom.autocomplete.querySelectorAll('.ac-item:not(.used)');
    if (e.key === 'ArrowDown') {
        acIndex = Math.min(acIndex + 1, items.length - 1);
        items.forEach((it, i) => it.classList.toggle('selected', i === acIndex));
        if (items[acIndex]) dom.input.value = items[acIndex].dataset.name;
        e.preventDefault();
    } else if (e.key === 'ArrowUp') {
        acIndex = Math.max(acIndex - 1, 0);
        items.forEach((it, i) => it.classList.toggle('selected', i === acIndex));
        if (items[acIndex]) dom.input.value = items[acIndex].dataset.name;
        e.preventDefault();
    } else if (e.key === 'Enter') {
        dom.autocomplete.innerHTML = '';
        makeGuess();
    } else if (e.key === 'Escape') {
        dom.autocomplete.innerHTML = '';
    }
});

dom.guessBtn.addEventListener('click', makeGuess);
dom.newGameBtn.addEventListener('click', newGame);

const hardModeToggle = document.getElementById('hard-mode-toggle');
const modeLabelText = document.getElementById('mode-label-text');

hardModeToggle.addEventListener('change', () => {
    const isHard = hardModeToggle.checked;
    document.body.classList.toggle('hard-mode', isHard);
    modeLabelText.textContent = isHard ? 'Hard' : 'Easy';
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('#search-wrap')) {
        dom.autocomplete.innerHTML = '';
    }
});

newGame();
