<script>
    import {faker} from '@faker-js/faker';
    import TableHead from './TableHead.svelte';
    import TableRow from './TableRow.svelte';
    
    
    let headers = ["First Name", "Last Name"];
    
    let personData = [];
   
   
    function createDataRows () {
        for (let i = 0; i < 10; i++) {
            let person = {firstName: faker.name.firstName(),
            lastName: faker.name.lastName()};
            personData.push(person);
        }
    };
    createDataRows();
    console.log(personData);
</script>
<table>
    
    <TableHead headers={headers}/>
    <!-- The #each loop results in a Empty Block error and a white page-->
  <!-- {#each personData as data} -->
   <TableRow personData={personData}/>
  <!-- {/each} --> 
   

</table>
