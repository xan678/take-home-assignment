from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_extensions.cache.decorators import cache_response
from requests.exceptions import RequestException
from app.utils import githubSearch
from django.core.cache import cache
from django.utils.decorators import method_decorator

class SearchGithubView(APIView):
    
    @cache_response( timeout=20, key_func='create_custom_key')
    def post(self, request, *args, **kwargs):
        
        search_type = request.data.get('search_type')
        search_text = request.data.get('search_text')

        if not search_type or not search_text:
            return Response({"detail": "search_type and search_text are required"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            results = githubSearch(search_type, search_text)
            print("cached response")
            return Response(results)
        except RequestException as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
    

    def create_custom_key(self, view_instance, view_method, request, *args, **kwargs):

        search_type = request.data.get('search_type').lower()
        search_text = request.data.get('search_text').lower()
    
        return "gitsearch:{0}//{1}//".format(search_type,search_text)
    

class ClearCacheView(APIView):
    
    def delete(self, request):
        try:
            cache.delete_pattern("gitsearch:*")
        
        except Exception as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        
        return Response({"detail": "Cache cleared."})
