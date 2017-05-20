class LandingController < ApplicationController

    def index
        render layout: 'general'
    end

    def my_profile
      render layout: 'general'
    end

    def best_practices
      render layout: 'general'
    end
    
    def login
        render layout: 'general'
    end
end
