<script>
import LeftBoxRightText from '../components/common/LeftBoxRightText.svelte';
import CheckedItem from '../components/common/CheckedItem.svelte';
import NumberBox from '../components/common/NumberBox.svelte';
import Attribute from '../components/dnd5e/Attribute.svelte';
import Proficiencies from '../components/dnd5e/Proficiencies.svelte';
import DeathSaves from '../components/dnd5e/DeathSaves.svelte';
let attributes = [
    {name: "Strength", value: 8},
    {name: "Dexterity", value: 9},
    {name: "Constitution", value: 10},
    {name: "Intelligence", value: 11},
    {name: "Wisdom", value: 12},
    {name: "Charisma", value: 13},
];
let savingthrows = [
    {name: "Strength", proficient: false},
    {name: "Dexterity", proficient: false},
    {name: "Constitution", proficient: false},
    {name: "Intelligence", proficient: true},
    {name: "Wisdom", proficient: true},
    {name: "Charisma", proficient: false},
]
let skills = [
    {name: "Acrobatics", subtext: 'Dex', proficient: false},
    {name: "Animal Handling", subtext: 'Wis', proficient: false},
    {name: "Arcana", subtext: 'Int', proficient: false},
    {name: "Athletics", subtext: 'Str', proficient: false},
    {name: "Deception", subtext: 'Cha', proficient: false},
    {name: "History", subtext: 'Int', proficient: false},
    {name: "Insight", subtext: 'Wis', proficient: false},
    {name: "Intimidation", subtext: 'Cha', proficient: false},
    {name: "Investigation", subtext: 'Int', proficient: false},
    {name: "Medicine", subtext: 'Wis', proficient: false},
    {name: "Nature", subtext: 'Int', proficient: false},
    {name: "Perception", subtext: 'Wis', proficient: false},
    {name: "Performance", subtext: 'Cha', proficient: false},
    {name: "Persuasion", subtext: 'Cha', proficient: false},
    {name: "Religion", subtext: 'Int', proficient: false},
    {name: "Sleight of Hand", subtext: 'Dex', proficient: false},
    {name: "Stealth", subtext: 'Dex', proficient: false},
    {name: "Survival", subtext: 'Wis', proficient: false},
];
let profs = {
    weapons: ["All Simple"],
    armor: ["Light Armor", "Shield"],
    languages: ["Common", "Celestial", "Sylvan"],
};
</script>

<style>
    div {
        border: solid 1px black;
        min-width: 10px;
        min-height: 10px;
        flex-grow: 1;
    }
    .flex-row {
        display: flex;
    }
    .flex-col {
        display: flex;
        flex-direction: column;
    }
    #sheetcontainer {
        width: 100%;
    }
</style>

<div class="flex-row" id="sheetcontainer">
    <div class="flex-col" id="attskillprof">
        <div class="flex-row" id="attskill">
            <div id="att">
                {#each attributes as att}
                    <Attribute {...att} />
                {/each}
            </div>
            <div class="flex-col" id="skill">
                <LeftBoxRightText box="" text="Inspiration" />
                <LeftBoxRightText box="" text="Proficiency Bonus" />
                <div id="savingthrows">
                    {#each savingthrows as st}
                        <CheckedItem {...st} />
                    {/each}
                </div>
                <div id="skills">
                    {#each skills as skill}
                        <CheckedItem {...skill} />
                    {/each}
                </div>
            </div>
        </div>
        <div id="passive">
            <LeftBoxRightText box="13" text="Passive Wisdom (Perception)" />
        </div>
        <Proficiencies {...profs} />
    </div>
    <div class="flex-col" id="statsattacksequip">
        <div class="flex-col" id="stats">
            <div class="flex-row">
                <NumberBox name="Armor Class" value="10"/>
                <NumberBox name="Initiative" value="3"/>
                <NumberBox name="Speed" value="30"/>
            </div>
            <div class="flex-row">
                <NumberBox name="Max HP" value="100"/>
                <NumberBox name="Current HP" value="80"/>
                <NumberBox name="Temp HP" value="3"/>
            </div>
            <div class="flex-row" id="hdsaves">
                <NumberBox name="Total HD" value="12d8"/>
                <NumberBox name="Current HD" value="11d8"/>
                <DeathSaves />
            </div>
        </div>
        <div id="attacks">Attacks</div>
        <div id="equipment">Equipment</div>
    </div>
    <div class="flex-col" id="persontraits">
        <div class="flex-col">
            <div id="personality">Personality Traits</div>
            <div id="ideals">Ideals</div>
            <div id="bonds">Bonds</div>
            <div id="flaws">Flaws</div>
        </div>
        <div id="featuretraits">Features &amp; Traits</div>
    </div>
</div>