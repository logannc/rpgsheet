<script>
import LeftBoxRightText from '../components/common/LeftBoxRightText.svelte';
import NumberBox from '../components/common/NumberBox.svelte';
import Attribute from '../components/dnd5e/standard/Attribute.svelte';
import Inspiration from '../components/dnd5e/standard/Inspiration.svelte';
import ProficiencyBonus from '../components/dnd5e/standard/ProficiencyBonus.svelte';
import SavingThrow from '../components/dnd5e/standard/SavingThrow.svelte';
import Skill from '../components/dnd5e/standard/Skill.svelte';
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
    {name: "Strength", mod: -1, checked: false},
    {name: "Dexterity", checked: false},
    {name: "Constitution", checked: false},
    {name: "Intelligence", checked: true},
    {name: "Wisdom", checked: true},
    {name: "Charisma", checked: false},
]
let skills = [
    {name: "Acrobatics", subtext: 'Dex', checked: false},
    {name: "Animal Handling", subtext: 'Wis', checked: false},
    {name: "Arcana", subtext: 'Int', checked: true},
    {name: "Athletics", subtext: 'Str', checked: false},
    {name: "Deception", subtext: 'Cha', checked: false},
    {name: "History", subtext: 'Int', checked: false},
    {name: "Insight", subtext: 'Wis', checked: false},
    {name: "Intimidation", subtext: 'Cha', checked: false},
    {name: "Investigation", subtext: 'Int', checked: false},
    {name: "Medicine", subtext: 'Wis', checked: false},
    {name: "Nature", subtext: 'Int', checked: false},
    {name: "Perception", subtext: 'Wis', checked: false},
    {name: "Performance", subtext: 'Cha', checked: false},
    {name: "Persuasion", subtext: 'Cha', checked: false},
    {name: "Religion", subtext: 'Int', checked: false},
    {name: "Sleight of Hand", subtext: 'Dex', checked: false},
    {name: "Stealth", subtext: 'Dex', checked: false},
    {name: "Survival", subtext: 'Wis', checked: false},
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
                <Inspiration box="" />
                <ProficiencyBonus box="" />
                <div id="savingthrows" style="padding: 1rem; flex-grow: 0">
                    {#each savingthrows as st}
                        <SavingThrow {...st} />
                    {/each}
                </div>
                <div id="skills" style="padding: 1rem">
                    {#each skills as skill}
                        <Skill {...skill} />
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