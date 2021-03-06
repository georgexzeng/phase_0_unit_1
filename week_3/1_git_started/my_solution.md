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

<ul>
<li>by using git add to incrementally add changes to the idnex before using commit command</li>
<li>by using git rm to remove files from the working tree and index again before using the commit command</li>
<li>by listing files as arguments to the commit comand, in which case the commit will ignore changes staged in the index and instead record the current content of the listed files</li>
<li>by using the -a switch with teh commit comand to automaticallly add changes from all known files and to automatically "rm" files in teh index that have been removed from teh working tree, and then perfrom the actual commit</li>
<li>by using the -interacte or -path switches with the commit command to decide one by one whichesfiles or hunks should be part of the commit before finalizing operations</li>
</ul>

#### fetch
<p>git fetch - download objects and refs from another repo.  fetches named heads or tages from one or more other repos, along with objects necessary to complete them.  ref names and their objects names of fetched refs are stored in .git/FETCH_HEAD.  git fetch can fetch from eithe ra single repo or from several repos at once.  when no remote is specified, by default the origin remote will be used. </p>

#### log
<p>git log - show commit logs.  command takes options applicable to teh git rev-list command to control what is show and how, and options applicable to the git diff-* commands to control how the changes each commit introduces are shown.</p>

#### merge
<p>git merge - join two or more develompent histories together.  incorporates changes from named commits (since their histories diverged from the current brnach) into the current branch.  command is used by git pull to cincorporate changes from another repo and can be used by hand to merge changes from one branch into another."</p>

#### pull
<p>git pull - fetch from and integrate with another repo or a local branch.  incorporaates changes from a remote repo into current branch.  in default mode, git pull is shorthand for git fetch followed by git merge FETCH_HEAD.</p>

#### push
<p>git push - update remote refs along with associated objects.  updates remote refs using local refs, while sending objects necessary to complete the given refs.  </p>

#### reset
<p>git reset - resets current HEAD to specified state.  in the first and second form, copy entries from tree-ish to the index.  IN the third form, set the current branch head (HEAD) to commit, optionally modifying index and working tree to match.  </p>

#### rm
<p>git rm - remove files from the working tree and from the index.  remoe friles form the index or from the working tree and the index.  will remove a file from just your working directory.  files being removed have to be identiacal to the tip of the branch and no updates to their contects can be staged in the index, though the default behavior can be overriden with teh -f option.  </p>

#### status


## Release 4: Git Workflow

- Push files to a remote repository

<p>method 1:</p>

<ol>
<li>git add [file]</li>
<li>git commit -m "message"</li>
<li>git push</li>
</ol>

<p>method 2:</p>

<ol>
<li>git commit - a -m "message"</li>
<li>git push</li>
</ol>

- Fetch changes

<p>method 1:</p>
<ol>
	<li>First check current remote - git remote -v</li>
	<li>Set up a new remote as necessary - git remote add upstream (URL)</li>
	<li>Verify new remote - git remote -v</li>
	<li>Fetch changes - git fetch upstream</li>
	<li>Branch the changes - git branch - va</li>
	<li>Verify you're on master branch - git branch</li>
	<li>Merge changes - git merge upstream/master</li>
	<li>Push changes to github - git push</li>
</ol>

<p>method 2:</p>
<ol>
	<li>Fetch changes - git fetch upstream</li>
	<li>Branch the changes - git branch - va</li>
	<li>Merge changes - git merge upstream/master</li>
	<li>Push changes to github - git push</li>
</ol>

- Commit locally

<p>method 1:</p>

<ol>
<li>git add [file]</li>
<li>git commit -m "message"</li>
</ol>

<p>method 2:</p>

<ol>
<li>git commit - a -m "message"</li>
</ol>

## Release 5: Errors you encountered
1. Error
2. Solution
3. Cause (explain the error)

## Release 6: Reflection

<p>Using command line for git is powerful and cool.  I'm a huge fan!</p>