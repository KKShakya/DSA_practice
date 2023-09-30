

const Rightangleft = (n=5)=>{
  console.log("right angled triangle upwards\n");
  let l = 0;
  let m=1
  for(let i=0;i<n;i++)
  {
    let tri = ''
    let k = 1;
  for(let j=1;j<=i;j++){

    //you can put 'k++'/ '*' / l /m++
    tri +=m++

  }
  console.log(tri);
  l++;
  }
  console.log('\n');
}

const RightangleRight = (n=5)=>{

  console.log("Right angled triangle downward\n");
  for(let i=0;i<n;i++)
  {
    let tri = ''
    let k = n;
  for(let j=n;j>i;j--){

    //you can put 'k--'/or '*'
    tri +='*';

  }
  console.log(tri);
  }
  console.log('\n');

}

Rightangleft(7);
RightangleRight(7);


const RightangledFromRight = (n=5)=>{

  console.log("Right angled triangle from right\n");
  let sp = n-1;
  let st=1;

  for(let i=0;i<n;i++)
  {
    let tri = ''
  for(let j=0;j<sp;j++){

    tri +=' '

  }

  for(let j=0;j<st;j++){

    tri +='*'

  }
  st++;
  sp--;

  console.log(tri);
  }
  console.log('\n');

}

RightangledFromRight(7)

const RightangledFromRightDn = (n=5)=>{

  console.log("Right angled triangle from right down\n");
  let sp = 0;
  let st=n;

  for(let i=0;i<n;i++)
  {
    let tri = ''
  for(let j=0;j<sp;j++){

    tri +=' '

  }

  for(let j=0;j<st;j++){

    tri +='*'

  }
  sp++;
  st--;

  console.log(tri);
  }
  console.log('\n');

}

RightangledFromRightDn(n=7)


const pyramidupwards = (n=5)=>{

  console.log("Pyramid upwards\n");
  let sp = n-1;
  let st=1;

  for(let i=0;i<n;i++)
  {
    let tri = ''
  for(let j=0;j<sp;j++){

    tri +=' '

  }

  for(let j=0;j<st;j++){

    tri +='* '

  }
  st++;
  sp--;

  console.log(tri);
  }
  console.log('\n');

}
const pyramidownwards = (n=5)=>{

  console.log("Pyramid upwards\n");
  let sp =1;
  let st=n;

  for(let i=0;i<n;i++)
  {
    let tri = ''
  for(let j=0;j<sp;j++){

    tri +=' '

  }

  for(let j=0;j<st;j++){

    tri +='* '

  }
  st--;
  sp++;

  console.log(tri);
  }
  console.log('\n');

}

pyramidupwards(7)
pyramidownwards(7)