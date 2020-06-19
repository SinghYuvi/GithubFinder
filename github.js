class Github {
    constructor(){   
        this.client_id = '47a20d5538b004237aaa';
        this.client_secret = '168788fe9ba700b1850626dde133c486dfe8a5fd';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
        }

        async getUser(user) {
            //const profileResponse = await fetch(`https://api.github.com/users/${user}`);        
            //const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`);
        
             const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);        
             const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        

            const profile = await profileResponse.json();
            const repos = await repoResponse.json();
        
            return {
              profile,
              repos
            }
          }
}