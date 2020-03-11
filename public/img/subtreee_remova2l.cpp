#include<iostream>
#include<bits/stdc++.h>
using namespace std;
	map< int, list<int > > m;
	int arr[100000];
 //long long	int sum[100000];
long long int allot(int a,int x)
	{

		if(m.count(a)==0)
		{
			if(arr[a]<x)
			return x;
			else
			 return arr[a];
		
		}
			map<int ,list<int> >::iterator it=m.find(a);
			int ans=arr[a];
		list<int >l=it->second;
		list<int >::iterator iter=l.begin();
	long long	int n2=0;
		while(iter!=l.end())
		{
			int p=*iter;
			
			
			ans=allot(p,x);
		
		
			n2+=ans;
			iter++;
			
		}
		arr[a]+=n2;
		if(arr[a]>x)
		return arr[a];
		else
		return x;
		
	}
	

	
int main()
{
	int t;
	cin>>t;
	while(t--)
	{
		int n,x;
		cin>>n>>x;
		
		for(int i=1;i<=n;i++)
		{
			cin>>arr[i];
		}
	
		for(int i=1;i<n;i++)
		{
			int p,q;
			cin>>p>>q;
			if(m.count(p)!=0)
			{
				m[p].push_back(q);
			}
			else{
				list<int >l;
				l.push_back(q);
				m[p]=l;
			} 
		}
long long int ans=allot(1,-x);
	
cout<<ans;
	
m.clear();
}

}
