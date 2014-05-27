## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
<p>git add - starts tracking new files and stage changes gto already tracked files. </p>

#### branch
<p>git branch - in general it can list, create and manage working contexts.  git branch lists out the local branches that you have - branch that you are currently working on will have a star next to it and if you have cloring turned on, will show the current branch in green.  when you run git init, it will automatically creat a 'master' branch by default, but there's nothing special about the name - you don't actualy have to have a master branch but since it's the default that's created, most projects do.</p>

<p>git branch (branchname) - creates a new branch.  when you creat ea branch this way, it creates a branch at your last commit so if you record some commits at this point and then switch to 'testing,' it will revert your working directory context back to hwen you created the branch in the first place.</p>

#### checkout
<p>git checkout -b (branchname) - creates and immediately switches to a new brand context.</p>

#### clone
<p>git clone [URL] - copy a git repository so you can add to it. Clones a repo into a newly created directory, creates remote-tracking branches for each branch in the cloned repo and creates and checks out an initial branch that's forked from the cloned repo's currently active branch. </p>

#### commit
<p>git commit - record changes to the repo.  stores the current contents of the index in a new commit along with a log message from the user describing changes.  content can be added in several ways:</p>

<li>by using git add to incrementally add changes to the idnex before using commit command</li>
<li>by using git rm to remove files from the working tree and index again before using the commit command</li>
<li>by listing files as arguments to the commit comand, in which case the commit will ignore changes staged in the index and instead record the current content of the listed files</li>
<li>by using the -a switch with teh commit comand to automaticallly add changes from all known files and to automatically "rm" files in teh index that have been removed from teh working tree, and then perfrom the actual commit</li>
<li>by using the -interacte or -path switches with the commit command to decide one by one whichesfiles or hunks should be part of the commit before finalizing operations</li>

#### fetch
<p>git fetch - download objects and refs from another repo.  fetches named heads or tages from one or more other repos, along with objects necessary to complete them.  ref names and their objects names of fetched refs are stored in .git/FETCH_HEAD.  git fetch can fetch from eithe ra single repo or from several repos at once.  when no remote is specified, by default the origin remote will be used. </p>

#### log
<div>git log - show commit logs.  command takes options applicable to teh git rev-list command to control what is show and how, and options applicable to the git diff-* commands to control how the changes each commit introduces are shown.</div>

#### merge
<div>git merge - join two or more develompent histories together.  incorporates changes from named commits (since their histories diverged from the current brnach) into the current branch.  command is used by git pull to cincorporate changes from another repo and can be used by hand to merge changes from one branch into another."</div>

#### pull
<!-- Your defnition here -->

#### push
<!-- Your defnition here -->

#### reset
<!-- Your defnition here -->

#### rm
<!-- Your defnition here -->

#### status


## Release 4: Git Workflow

- Push files to a remote repository
- Fetch changes
- Commit locally

## Release 5: Errors you encountered
1. Error
2. Solution
3. Cause (explain the error)

## Release 6: Reflection